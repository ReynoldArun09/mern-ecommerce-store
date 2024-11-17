import { Router } from "express";
import * as product from "../controllers/product-controller";
import {
  AdminMiddleware,
  AuthMiddleware,
  ValidationMiddleware,
} from "../middlewares";
import { productSchema } from "../schemas/product-schema";

export const productRoutes = Router();

productRoutes.get("/all", product.GetAllProducts);
productRoutes.get("/featured", product.GetFeaturedProducts);
productRoutes.post(
  "/create",
  ValidationMiddleware(productSchema),
  AuthMiddleware,
  AdminMiddleware,
  product.CreateProduct
);
productRoutes.delete(
  "/delete/:id",
  AuthMiddleware,
  AdminMiddleware,
  product.DeleteProduct
);
productRoutes.get("/all-category", product.GetProductsByCategory);
productRoutes.get("/all-target", product.GetProductsByTarget);
productRoutes.get("/recommendation", product.GetRecommendedProducts);
productRoutes.patch(
  "/toggle/:id",
  AuthMiddleware,
  AdminMiddleware,
  product.ToggleFeaturedProduct
);
productRoutes.get("/category-count", product.GetCategoriesAndProductCount);
productRoutes.get("/single-product/:productId", product.GetSingleProduct);
