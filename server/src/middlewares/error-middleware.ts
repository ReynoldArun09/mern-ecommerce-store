import { type ErrorRequestHandler } from "express";
import { ZodError } from "zod";
import { AppError, logger } from "../utils";
import { GlobalErrorMessages } from "../constants";

export const ErrorMiddleware: ErrorRequestHandler = (error, req, res, next) => {
  const statusCode = error.statusCode || 500;

  if (error instanceof AppError) {
    return res.status(statusCode).json({ message: error.message });
  }

  if (error instanceof ZodError) {
    return res.status(statusCode).json({ errors: error.flatten().fieldErrors });
  }

  if (error.name === "CastError") {
    return res
      .status(statusCode)
      .json({ message: GlobalErrorMessages.INVALID_ID });
  }

  logger.error(error);

  return res
    .status(statusCode)
    .json({ message: GlobalErrorMessages.INTERNAL_SERVER_ERROR });
};
