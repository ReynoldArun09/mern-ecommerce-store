import mongoose, { MongooseError } from "mongoose";
import { ParsedEnvVariables } from "../config";
import { logger } from "../utils";
import { ErrorMessages, SuccessMessages } from "../constants";

function MongoConnection() {
  const mongo_url = ParsedEnvVariables.MONGO_DB_URI;

  if (!mongo_url) {
    logger.warn(ErrorMessages.MONGO_ENV_NOT_DEFINED);
    process.exit(1);
  }
  try {
    mongoose.connect(mongo_url);
    logger.info(SuccessMessages.MONGO_CONNECTION_SUCCESS);
  } catch (error: unknown) {
    if (error instanceof MongooseError) {
      logger.error(`Mongoose Error: ${error.message}`);
    } else if (error instanceof Error) {
      logger.error(`Error: ${error.message}`);
    } else {
      logger.error(ErrorMessages.MONGO_CONNECTION_ERROR, error);
    }
    process.exit(1);
  }
}

export default MongoConnection;
