import { Router } from "express";
import * as auth from "../controllers/auth-controller";
import { AuthMiddleware, ValidationMiddleware } from "../middlewares";
import { SignInSchema, SignUpSchema } from "../schemas/auth-schema";

export const authRoutes = Router();

authRoutes.post("/signin", ValidationMiddleware(SignInSchema), auth.SignInApi);
authRoutes.post("/signup", ValidationMiddleware(SignUpSchema), auth.SignUpApi);
authRoutes.post("/signout", auth.SignOutApi);
authRoutes.post("/refresh-token", auth.RefreshTokenApi);
authRoutes.get("/verify", AuthMiddleware, auth.VerifyAuthApi);
