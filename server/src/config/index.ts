import { z } from "zod";
import dotenv from "dotenv";
import { ValidationMessages } from "../constants";
import { logger } from "../utils";

dotenv.config();

const EnvVariables = z.object({
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
  PORT: z.string().default("3000"),
  MONGO_DB_URI: z
    .string()
    .min(1, { message: ValidationMessages.MONGO_DB_URI_REQUIRED }),
  ACCESS_TOKEN_SECRET: z
    .string()
    .min(10, { message: ValidationMessages.ACCESS_TOKEN_SECRET_LENGTH }),
  REFRESH_TOKEN_SECRET: z
    .string()
    .min(10, { message: ValidationMessages.REFRESH_TOKEN_SECRET_LENGTH }),
  CORS_ORIGIN: z
    .string()
    .min(1, { message: ValidationMessages.CORS_ORIGIN_REQUIRED }),
  CLOUDINARY_CLOUD_NAME: z
    .string()
    .min(1, { message: ValidationMessages.CLOUDINARY_CLOUD_NAME_REQUIRED }),
  CLOUDINARY_API_KEY: z
    .string()
    .min(1, { message: ValidationMessages.CLOUDINARY_API_KEY_REQUIRED }),
  CLOUDINARY_API_SECRET: z
    .string()
    .min(1, { message: ValidationMessages.CLOUDINARY_API_SECRET_REQUIRED }),
  STRIPE_SECRET_KEY: z
    .string()
    .min(1, { message: ValidationMessages.STRIPE_SECRET_KEY_REQUIRED }),
});

export type EnvVariablesType = z.infer<typeof EnvVariables>;

const envVariables = (): EnvVariablesType => {
  try {
    return EnvVariables.parse(process.env);
  } catch (error) {
    logger.error("Error parsing environment variables:", error);
    process.exit(1);
  }
};

export const ParsedEnvVariables = envVariables();
