import { Request, Response } from "express";
import { AsyncWrapper } from "../utils";
import { Coupon } from "../models/coupon-model";
import { ErrorMessages, HttpStatusCode } from "../constants";

export const GetCouponApi = AsyncWrapper(
  async (req: Request, res: Response) => {
    const coupon = await Coupon.findOne({
      customerId: req.user._id,
      isActive: true,
    });

    res.status(HttpStatusCode.OK).json({
      success: true,
      data: coupon,
    });
  }
);

export const ValidateCouponApi = AsyncWrapper(
  async (req: Request, res: Response) => {
    const { code } = req.body;
    const existingCoupon = await Coupon.findOne({
      code: code,
      customerId: req.user._id,
      isActive: true,
    });

    if (!existingCoupon) {
      return res.status(HttpStatusCode.BAD_REQUEST).json({
        success: false,
        message: ErrorMessages.COUPON_NOT_FOUND,
      });
    }

    if (
      !existingCoupon.expirationDate ||
      new Date(existingCoupon.expirationDate) < new Date()
    ) {
      (existingCoupon.isActive = false), await existingCoupon.save();
      return res.status(HttpStatusCode.BAD_REQUEST).json({
        success: false,
        message: ErrorMessages.COUPON_EXPIRED,
      });
    }

    res.json({
      success: true,
      code: existingCoupon.code,
      discountPercentage: existingCoupon.discountPercentage,
    });
  }
);
