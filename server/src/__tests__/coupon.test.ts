import request from "supertest";
import jwt from "jsonwebtoken";
import { Customer, Coupon } from "../models";
import app from "../app";

jest.mock("jsonwebtoken");
jest.mock("../models/customer-model");
jest.mock("../models/coupon-model");

describe("Coupon Controller testing", () => {
  const mockUserId = "userId123";
  const mockUser = {
    _id: mockUserId,
    email: "test@example.com",
    role: "customer",
  };
  const mockSelect = jest.fn().mockRejectedValue(mockUser);
  beforeEach(() => {
    jest.clearAllMocks();
    (jwt.verify as jest.Mock).mockReturnValue({ _id: mockUserId });

    (Customer.findById as jest.Mock).mockResolvedValue({ select: mockSelect });
  });
  describe("get Coupon route", () => {
    it("should retrun a active coupon for user", async () => {
      const mockCoupon = {
        _id: "couponId123",
        customerId: mockUserId,
        code: "TEST100",
        discountPercentage: 10,
        isActive: true,
        expirationDate: new Date(Date.now() + 24 * 60 * 60 * 1000).toString(),
      };
      (Coupon.findOne as jest.Mock).mockResolvedValueOnce(mockCoupon);
      const response = await request(app)
        .get("/api/v1/coupon")
        .set("Cookie", [`accessToken=mockToken`]);

      expect(response.status).toBe(200);
      expect(response.body.success).toBeTruthy();
      expect(response.body).toEqual({
        data: mockCoupon,
        success: true,
      });
    });

    it("should return null if user has no active coupon", async () => {
      (Coupon.findOne as jest.Mock).mockResolvedValueOnce(null);
      const response = await request(app)
        .get("/api/v1/coupon")
        .set("Cookie", [`accessToken=mockToken`]);

      expect(response.status).toBe(200);
      expect(response.body.success).toBeTruthy();
      expect(response.body.data).toBe(null);
    });
  });

  it("should successfully validate an active coupon", async () => {
    const mockCode = "VALID100";
    const mockCoupon = {
      _id: "couponId123",
      customerId: mockUserId,
      code: "VALID100",
      discountPercentage: 15,
      isActive: true,
      expirationDate: new Date(Date.now() + 24 * 60 * 60 * 1000).toString(),
      save: jest.fn(),
    };
    (Coupon.findOne as jest.Mock).mockResolvedValueOnce(mockCoupon);
    const response = await request(app)
      .post("/api/v1/coupon/validate")
      .set("Cookie", [`accessToken=mockToken`])
      .send({
        code: mockCode,
      });

    expect(response.status).toBe(200);
    expect(response.body.success).toBeTruthy();
    expect(response.body).toEqual({
      success: true,
      code: mockCoupon.code,
      discountPercentage: mockCoupon.discountPercentage,
    });
  });

  it("should return 400 status if coupon doesnt exist", async () => {
    (Coupon.findOne as jest.Mock).mockResolvedValueOnce(null);
    const response = await request(app)
      .post("/api/v1/coupon/validate")
      .set("Cookie", [`accessToken=mockToken`])
      .send({
        code: "INVALID100",
      });
    expect(response.status).toBe(400);
    expect(response.body.success).toBeFalsy();
  });

  it("should update active status to false if coupon is expired", async () => {
    const mockCoupon = {
      _id: "couponId123",
      customerId: mockUserId,
      code: "EXPIRED100",
      discountPercentage: 20,
      isActive: true,
      expirationDate: new Date(Date.now() - 24 * 60 * 60 * 1000), // Expired
      save: jest.fn(),
    };
    (Coupon.findOne as jest.Mock).mockResolvedValueOnce(mockCoupon);
    const response = await request(app)
      .post("/api/v1/coupon/validate")
      .set("Cookie", [`accessToken=mockToken`])
      .send({
        code: "EXPIRED100",
      });

    expect(response.status).toBe(400);
    expect(response.body.success).toBeFalsy();
    expect(mockCoupon.save).toHaveBeenCalled();
    expect(mockCoupon.isActive).toBe(false);
  });
});
