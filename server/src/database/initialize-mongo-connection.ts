import mongoose, { MongooseError } from "mongoose";
import { logger } from "../utils";
import { GlobalErrorMessages, GlobalSuccessMessages } from "../constants";
import { ParsedEnvVariables } from "../config";

async function InitializeMongoConnection() {
  const mongo_url = ParsedEnvVariables.MONGO_DB_URI;

  if (!mongo_url) {
    logger.warn(GlobalErrorMessages.MONGO_ENV_NOT_DEFINED);
    process.exit(1);
  }
  try {
    await mongoose.connect(mongo_url);
    logger.info(GlobalSuccessMessages.MONGO_CONNECTION_SUCCESS);
  } catch (error: unknown) {
    if (error instanceof MongooseError) {
      logger.error(`Mongoose Error: ${error.message}`);
    } else if (error instanceof Error) {
      logger.error(`Error: ${error.message}`);
    } else {
      logger.error(GlobalErrorMessages.MONGO_CONNECTION_ERROR, error);
    }
    process.exit(1);
  }
}

export default InitializeMongoConnection;
