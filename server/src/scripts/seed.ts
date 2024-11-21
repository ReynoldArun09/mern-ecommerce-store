import mongoose from "mongoose";
import { logger } from "../utils";
import { ParsedEnvVariables } from "../config";
import { Customer, Product } from "../models";
import { productsData, userData } from "./data";
import bcrypt from "bcryptjs";

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

const seedUser = async () => {
  try {
    await Customer.deleteMany({});
    const data: {
      email: string;
      name: string;
      password: string;
      role: string;
    }[] = [];
    userData.forEach((user) => {
      const hashedPassword = bcrypt.hashSync(user.password, 10);
      data.push({
        email: user.email,
        name: user.name,
        password: hashedPassword,
        role: user.role,
      });
    });

    await Customer.insertMany(data);
    logger.info("Customer/admin seeded successfully");
  } catch (error) {
    logger.error("Failed to seed customer/admin", error);
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
