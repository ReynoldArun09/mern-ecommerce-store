import { ParsedEnvVariables } from "../config";
import {
  ApiErrorMessages,
  ApiSuccessMessages,
  HttpStatusCode,
} from "../constants";
import { stripe } from "../lib";
import { Coupon, Order } from "../models";

import { AsyncWrapper } from "../utils";
import { Request, Response } from "express";

export const CreateCheckoutSessionApi = AsyncWrapper(
  async (req: Request, res: Response) => {
    const { products, couponCode } = req.body;

    if (!Array.isArray(products) || products.length === 0) {
      return res.status(400).json({
        success: false,
        message: ApiErrorMessages.INVALID_EMPTY_PRODUCTS,
      });
    }

    let totalAmount = 0;

    const lineItems = products.map((product) => {
      const amount = Math.round(product.product.price * 100);
      totalAmount += amount * product.quantity;

      return {
        price_data: {
          currency: "usd",
          product_data: {
            name: product.product.name,
          },
          unit_amount: amount,
        },
        quantity: product.quantity || 1,
      };
    });

    let coupon = null;
    if (couponCode) {
      coupon = await Coupon.findOne({ code: couponCode, userId: req.user._id });
      if (coupon) {
        totalAmount -= Math.round(
          (totalAmount * coupon.discountPercentage) / 100
        );
      }
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${ParsedEnvVariables.CORS_ORIGIN}/purchase-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${ParsedEnvVariables.CORS_ORIGIN}/purchase-cancel`,
      discounts: coupon
        ? [
            {
              coupon: await createStripeCoupon(coupon.discountPercentage),
            },
          ]
        : [],
      metadata: {
        userId: req.user._id.toString(),
        couponCode: couponCode || "",
        products: JSON.stringify(
          products.map((p) => ({
            id: p.id,
            quantity: p.quantity,
            price: p.price,
          }))
        ),
      },
    });

    if (totalAmount >= 20000) {
      await createNewCoupon(req.user._id.toString());
    }
    res.status(200).json({
      success: true,
      id: session.id,
      totalAmount: totalAmount / 100,
    });
  }
);

async function createStripeCoupon(discountPercentage: any) {
  const coupon = await stripe.coupons.create({
    percent_off: discountPercentage,
    duration: "once",
  });

  return coupon.id;
}

async function createNewCoupon(customerId: string) {
  await Coupon.findOneAndDelete({ customerId });

  const newCoupon = new Coupon({
    code: "GIFT" + Math.random().toString(36).substring(2, 8).toUpperCase(),
    discountPercentage: 10,
    expirationDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    customerId,
  });
  await newCoupon.save();
  return newCoupon;
}

export const CheckoutSuccessApi = AsyncWrapper(
  async (req: Request, res: Response) => {
    const { sessionId } = req.body;
    const session = (await stripe.checkout.sessions.retrieve(sessionId)) as any;

    if (session && session.payment_status === "paid") {
      if (session?.metadata?.couponCode) {
        await Coupon.findOneAndUpdate(
          {
            code: session.metadata.couponCode,
            userId: session.metadata.userId,
          },
          {
            isActive: false,
          }
        );
      }
      const products = JSON.parse(session.metadata.products);
      const newOrders = new Order({
        user: session?.metadata.userId,
        products: products.map((product: any) => ({
          product: product.id,
          quantity: product.quantity,
          price: product.price,
        })),
        totalAmount: session.amount_total / 100,
        stripeSessionId: sessionId,
      });

      await newOrders.save();
      res.status(HttpStatusCode.OK).json({
        success: true,
        message: ApiSuccessMessages.PURCHASE_SUCCESS,
        orderId: newOrders._id,
      });
    }
  }
);
