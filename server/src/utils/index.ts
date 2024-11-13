import { format, createLogger, transports } from "winston";
import { type RequestHandler } from "express";
import { HttpStatusCode } from "../constants";

const formatStyle = format.combine(
  format.colorize({ all: true }),
  format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
  format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`)
);

export const logger = createLogger({
  level: "info",
  format: formatStyle,
  transports: [new transports.Console()],
});

export const AsyncWrapper =
  (fn: Function): RequestHandler =>
  async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      next(error);
    }
  };

export class AppError extends Error {
  statusCode: HttpStatusCode;
  constructor(message: string, statusCode: HttpStatusCode) {
    super(message);
    this.message = message;
    this.statusCode = statusCode;

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}
