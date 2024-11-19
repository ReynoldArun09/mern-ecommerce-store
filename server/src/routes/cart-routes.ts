import { Router } from "express";
import * as cart from "../controllers/cart-controller";
import { AuthMiddleware } from "../middlewares";

export const cartRoutes = Router();
cartRoutes.post("/add-to-cart/:productId", AuthMiddleware, cart.AddToCart);
cartRoutes.get("/get-cart", AuthMiddleware, cart.GetCartProduct);
cartRoutes.post("/remove-cart", AuthMiddleware, cart.RemoveAllCartItems);
cartRoutes.post("/sync-cart", AuthMiddleware, cart.SyncCartWithLocalStorage);
cartRoutes.post("/quantity/:productId", AuthMiddleware, cart.UpdateQuantityApi);
