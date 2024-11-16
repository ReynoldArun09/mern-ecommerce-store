import express, { type Application } from "express";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import cors from "cors";
import { ParsedEnvVariables } from "./config";
import { ErrorMiddleware } from "./middlewares";
import {
  authRoutes,
  cartRoutes,
  couponRouter,
  paymentRoutes,
  productRoutes,
} from "./routes";

const app: Application = express();

app.use(helmet());
app.use(
  cors({
    origin: ParsedEnvVariables.CORS_ORIGIN,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(express.json({ limit: "10mb" }));
app.use(cookieParser());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/product", productRoutes);
app.use("/api/v1/cart", cartRoutes);
app.use("/api/v1/coupon", couponRouter);
app.use("/api/v1/payments", paymentRoutes);

app.use(ErrorMiddleware);

export default app;
