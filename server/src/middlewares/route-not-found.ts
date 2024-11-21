import { RequestHandler } from "express";
import { GlobalErrorMessages, HttpStatusCode } from "../constants";

export const RouteNotFound: RequestHandler = (req, res, next) => {
  res
    .status(HttpStatusCode.NOT_FOUND)
    .json({ message: GlobalErrorMessages.ROUTE_NOT_FOUND });
};
