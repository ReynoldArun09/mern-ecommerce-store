import { z } from "zod";
import dotenv from "dotenv";

dotenv.config();

const EnvVariables = z.object({
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
  PORT: z.string().default("3000"),
  MONGO_DB_URI: z.string().min(1),
  ACCESS_TOKEN_SECRET: z.string().min(10),
  REFRESH_TOKEN_SECRET: z.string().min(10),
  CORS_ORIGIN: z.string().min(1),
  CLOUDINARY_CLOUD_NAME: z.string().min(1),
  CLOUDINARY_API_KEY: z.string().min(1),
  CLOUDINARY_API_SECRET: z.string().min(1),
});

export const ParsedEnvVariables = EnvVariables.parse(process.env);
