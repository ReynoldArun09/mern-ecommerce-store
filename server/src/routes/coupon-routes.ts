import { Router } from "express";
import { AuthMiddleware } from "../middlewares";
import * as coupon from "../controllers/coupon-controller";

export const couponRouter = Router();

couponRouter.get("/", AuthMiddleware, coupon.GetCouponApi);
couponRouter.post("/validate", AuthMiddleware, coupon.ValidateCouponApi);
