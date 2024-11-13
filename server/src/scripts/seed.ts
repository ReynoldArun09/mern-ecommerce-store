import mongoose from "mongoose";
import { logger } from "../utils";
import { ParsedEnvVariables } from "../config";
import { Product } from "../models";
import { productsData } from "./data";

const mongoURI = ParsedEnvVariables.MONGO_DB_URI;

const seedProducts = async () => {
  try {
    await Product.deleteMany({});
    await Product.insertMany(productsData);
    logger.info("Products seeded successfully");
  } catch (error) {
    logger.error("Failed to seed products", error);
  }
};

(async () => {
  if (ParsedEnvVariables.NODE_ENV === "development") {
    try {
      await mongoose.connect(mongoURI);
      logger.info("MongoDB connected");
      await seedProducts();
      await mongoose.connection.close();
      process.exit(1);
    } catch (error) {
      logger.error("Failed to connect to MongoDB", error);
    }
  } else {
    logger.warn("Not in development mode");
  }
})();
