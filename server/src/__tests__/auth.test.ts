import request from "supertest";
import app from "../app";
import { ApiErrorMessages, ApiSuccessMessages } from "../constants";
import { Customer } from "../models/customer-model";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

jest.mock("bcryptjs");
jest.mock("jsonwebtoken");
jest.mock("../models/customer-model");

describe("Auth controller testing", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  describe("SignInApi", () => {
    it("should sign in user", async () => {
      const mockUser = {
        email: "zgG0j@example.com",
        password: "password123456A$",
      };
      (Customer.findOne as jest.Mock).mockResolvedValueOnce({});
      (bcrypt.compare as jest.Mock).mockResolvedValueOnce(true);
      const response = await request(app)
        .post("/api/v1/auth/signin")
        .send(mockUser);

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.message).toBe(ApiSuccessMessages.SIGNIN_SUCCESS);
    });

    it("should return 400 status if user does not exist", async () => {
      (Customer.findOne as jest.Mock).mockResolvedValueOnce(null);
      const response = await request(app).post("/api/v1/auth/signin").send({
        email: "zgG0j@example.com",
        password: "password123456A$",
      });

      expect(response.status).toBe(400);
      expect(response.body.message).toBe(ApiErrorMessages.USER_NOT_FOUND);
    });
    it("should return 400 status if password is incorrect", async () => {
      (Customer.findOne as jest.Mock).mockResolvedValueOnce({});
      (bcrypt.compare as jest.Mock).mockResolvedValueOnce(false);
      const response = await request(app).post("/api/v1/auth/signin").send({
        email: "zgG0j@example.com",
        password: "password123456A$",
      });

      expect(response.status).toBe(400);
      expect(response.body.message).toBe(ApiErrorMessages.INVALID_PASSWORD);
    });
  });

  describe("SignUpApi", () => {
    it("should sign up user", async () => {
      (Customer.findOne as jest.Mock).mockResolvedValueOnce(null);
      (bcrypt.hash as jest.Mock).mockResolvedValueOnce("hashedPassword");
      (Customer.create as jest.Mock).mockResolvedValueOnce({
        _id: "mockId",
        name: "mockUsername",
        email: "mockEmail@example.com",
        password: "hashedPassword",
        toObject: jest.fn().mockReturnValue({
          _id: "mockId",
          name: "mockUsername",
          email: "mockEmail@example.com",
        }),
      });
      (jwt.sign as jest.Mock).mockReturnValueOnce("mockToken");

      const response = await request(app).post("/api/v1/auth/signup").send({
        name: "mockUsername",
        email: "mockEmail@example.com",
        password: "mockPassword1234A$",
      });

      expect(response.status).toBe(201);
      expect(response.body.success).toBe(true);
      expect(response.body.message).toBe(ApiSuccessMessages.SIGNUP_SUCCESS);
    });

    it("should return 400 if user already exist", async () => {
      (Customer.findOne as jest.Mock).mockResolvedValueOnce({});
      const response = await request(app).post("/api/v1/auth/signup").send({
        name: "mockUsername",
        email: "mockEmail@example.com",
        password: "mockPassword1234A$",
      });

      expect(response.status).toBe(400);
      expect(response.body.message).toBe(ApiErrorMessages.USER_ALREADY_EXISTS);
    });
  });

  describe("Sign out user and clear access and refresh token", () => {
    it("should sign out and clear cookie", async () => {
      const response = await request(app).post("/api/v1/auth/signout");
      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.message).toBe(ApiSuccessMessages.SIGNOUT_SUCCESS);
      expect(response.header["auth"]).toBeUndefined();
      expect(response.header["authrefresh"]).toBeUndefined();
    });
  });
});
