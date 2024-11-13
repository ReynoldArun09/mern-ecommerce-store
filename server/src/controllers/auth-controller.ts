import { Request, Response } from "express";
import { AppError, AsyncWrapper } from "../utils";
import { ErrorMessages, HttpStatusCode, SuccessMessages } from "../constants";
import { ParsedEnvVariables } from "../config";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Customer } from "../models";
import { SignInSchemaType, SignUpSchemaType } from "../schemas/auth-schema";
import { JWTPayloadType } from "../types";

export const SignUpApi = AsyncWrapper(async (req: Request, res: Response) => {
  const { email, password, name } = req.body as SignUpSchemaType;

  const existingCustomer = await Customer.findOne({ email });
  if (existingCustomer) {
    throw new AppError(
      ErrorMessages.USER_ALREADY_EXISTS,
      HttpStatusCode.BAD_REQUEST
    );
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const customer = await Customer.create({
    name,
    email,
    password: hashedPassword,
  });

  const accessToken = jwt.sign(
    { id: customer._id },
    ParsedEnvVariables.ACCESS_TOKEN_SECRET,
    {
      expiresIn: "15m",
    }
  );

  const refreshToken = jwt.sign(
    { id: customer._id },
    ParsedEnvVariables.REFRESH_TOKEN_SECRET,
    {
      expiresIn: "1d",
    }
  );

  res.cookie("accessToken", accessToken, {
    httpOnly: true,
    sameSite: "strict",
    maxAge: 15 * 60 * 1000,
  });

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    sameSite: "strict",
    maxAge: 24 * 60 * 60 * 1000,
  });

  const { password: _, ...result } = customer.toObject();

  res.status(HttpStatusCode.CREATED).json({
    success: true,
    data: result,
    message: SuccessMessages.SIGNUP_SUCCESS,
  });
});

export const SignInApi = AsyncWrapper(async (req: Request, res: Response) => {
  const { email, password } = req.body as SignInSchemaType;

  const existingCustomer = await Customer.findOne({ email });

  if (!existingCustomer) {
    throw new AppError(
      ErrorMessages.USER_NOT_FOUND,
      HttpStatusCode.BAD_REQUEST
    );
  }

  const isMatch = await bcrypt.compare(password, existingCustomer.password);

  if (!isMatch) {
    throw new AppError(
      ErrorMessages.INVALID_PASSWORD,
      HttpStatusCode.BAD_REQUEST
    );
  }

  const accessToken = jwt.sign(
    { _id: existingCustomer.id },
    ParsedEnvVariables.ACCESS_TOKEN_SECRET,
    {
      expiresIn: "15m",
    }
  );

  const refreshToken = jwt.sign(
    { _id: existingCustomer.id },
    ParsedEnvVariables.REFRESH_TOKEN_SECRET,
    {
      expiresIn: "1d",
    }
  );

  res.cookie("accessToken", accessToken, {
    httpOnly: true,
    sameSite: "strict",
    maxAge: 15 * 60 * 1000,
  });

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    sameSite: "strict",
    maxAge: 24 * 60 * 60 * 1000,
  });

  res.status(HttpStatusCode.OK).json({
    success: true,
    data: existingCustomer,
    message: SuccessMessages.SIGNIN_SUCCESS,
  });
});

export const SignOutApi = AsyncWrapper(async (req: Request, res: Response) => {
  res.clearCookie("accessToken");
  res.clearCookie("refreshToken");
  res.status(HttpStatusCode.OK).json({
    success: true,
    message: SuccessMessages.SIGNOUT_SUCCESS,
  });
});

export const RefreshTokenApi = AsyncWrapper(
  async (req: Request, res: Response) => {
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
      throw new AppError(ErrorMessages.INVALID_TOKEN, 401);
    }

    const decoded = jwt.verify(
      refreshToken,
      ParsedEnvVariables.REFRESH_TOKEN_SECRET
    ) as JWTPayloadType;

    const accessToken = jwt.sign(
      { _id: decoded._id },
      ParsedEnvVariables.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "15m",
      }
    );

    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      sameSite: "strict",
      maxAge: 15 * 60 * 1000,
    });

    res.status(HttpStatusCode.OK).json({
      success: true,
      message: SuccessMessages.REFRESH_TOKEN_SUCCESS,
    });
  }
);

export const VerifyAuthApi = AsyncWrapper(
  async (req: Request, res: Response) => {
    const user = req.user;
    res.status(HttpStatusCode.OK).json({
      success: true,
      data: user,
    });
  }
);
