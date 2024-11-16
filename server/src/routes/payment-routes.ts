import { Router } from "express";
import { AuthMiddleware } from "../middlewares";
import * as payment from "../controllers/payment-controller";

export const paymentRoutes = Router();

paymentRoutes.post(
  "/create-checkout-session",
  AuthMiddleware,
  payment.CreateCheckoutSessionApi
);
paymentRoutes.post(
  "/checkout-success",
  AuthMiddleware,
  payment.CheckoutSuccessApi
);
