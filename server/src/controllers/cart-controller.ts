import { Request, Response } from "express";
import { AsyncWrapper } from "../utils";
import { Customer, Product } from "../models";
import { ErrorMessages, HttpStatusCode } from "../constants";
import { ICartItems } from "../types";

export const GetCartProduct = AsyncWrapper(
  async (req: Request, res: Response) => {
    const existingCustomer = await Customer.findById(req.user._id).populate(
      "cartItems.product"
    );

    if (!existingCustomer) {
      return res
        .status(HttpStatusCode.BAD_REQUEST)
        .json({ success: false, message: ErrorMessages.USER_NOT_FOUND });
    }

    res.status(HttpStatusCode.OK).json({
      success: true,
      data: existingCustomer.cartItems,
    });
  }
);

export const AddToCart = AsyncWrapper(async (req: Request, res: Response) => {
  const { productId } = req.params;

  const existingProduct = await Product.findById(productId);
  if (!existingProduct) {
    return res
      .status(HttpStatusCode.BAD_REQUEST)
      .json({ success: false, message: ErrorMessages.PRODUCT_NOT_FOUND });
  }
  const existingCustomer = await Customer.findById(req.user._id).populate(
    "cartItems.product"
  );
  if (!existingCustomer) {
    return res
      .status(HttpStatusCode.BAD_REQUEST)
      .json({ success: false, message: ErrorMessages.USER_NOT_FOUND });
  }

  const productData = {
    product: existingProduct,
    quantity: 1,
  };

  let cartItems = existingCustomer?.cartItems;
  let isExist = false;
  for (let item of cartItems) {
    console.log(item);
    if (item.product._id.toString() === productId.toString()) {
      item.quantity++;
      isExist = true;
      break;
    }
  }

  if (!isExist) {
    cartItems.push(productData);
  }

  existingCustomer.cartItems = cartItems;
  await existingCustomer?.save();

  res.status(HttpStatusCode.OK).json({
    success: true,
    data: existingCustomer.cartItems,
  });
});

export const RemoveAllCartItems = AsyncWrapper(
  async (req: Request, res: Response) => {
    const { productId } = req.body;
    const existingCustomer = await Customer.findById(req.user._id).populate(
      "cartItems.product"
    );
    if (!existingCustomer) {
      return res
        .status(HttpStatusCode.BAD_REQUEST)
        .json({ success: false, message: ErrorMessages.USER_NOT_FOUND });
    }

    if (!productId) {
      existingCustomer.cartItems = [];
    } else {
      existingCustomer.cartItems = existingCustomer.cartItems.filter(
        (item: ICartItems) =>
          item.product._id.toString() !== productId.toString()
      );
    }
    await existingCustomer.save();
    res.status(HttpStatusCode.OK).json({
      success: true,
      data: existingCustomer.cartItems,
    });
  }
);

export const UpdateQuantityApi = AsyncWrapper(
  async (req: Request, res: Response) => {
    const { quantity } = req.body;
    const { productId } = req.params;

    const existingCustomer = await Customer.findById(req.user._id).populate(
      "cartItems.product"
    );
    if (!existingCustomer) {
      return res
        .status(HttpStatusCode.BAD_REQUEST)
        .json({ success: false, message: ErrorMessages.USER_NOT_FOUND });
    }

    const existingItem = existingCustomer.cartItems.find(
      (item: ICartItems) => item.product._id.toString() === productId
    );

    if (existingItem) {
      if (quantity === 0) {
        existingCustomer.cartItems = existingCustomer.cartItems.filter(
          (item: ICartItems) =>
            item.product._id.toString() !== productId.toString()
        );
      } else {
        existingItem.quantity = quantity;
      }
      await existingCustomer.save();
      return res.status(HttpStatusCode.OK).json({
        success: true,
        data: existingCustomer.cartItems,
      });
    } else {
      return res.status(HttpStatusCode.BAD_REQUEST).json({
        success: false,
        message: ErrorMessages.ITEM_NOT_FOUND_IN_CART,
      });
    }
  }
);
