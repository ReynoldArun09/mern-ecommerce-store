import request from "supertest";
import app from "../app";
import { Product } from "../models";

jest.mock("../models/product-model");

describe("Product controller testing", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  const mockProducts = [
    {
      _id: "mockId",
      name: "mockName",
      description: "mockDescription",
      price: "mockPrice",
      image: "mockImage",
      category: "mockCategory",
      isFeatured: false,
      brand: "mockBrand",
    },
  ];
  describe("Get all products route", () => {
    it("should return all products", async () => {
      (Product.find as jest.Mock).mockResolvedValue(mockProducts);
      const response = await request(app).get("/api/v1/product/all");
      expect(response.status).toBe(200);
      expect(response.body.success).toBeTruthy();
      expect(response.body.data).toEqual(mockProducts);
    });
    it("should return empty array if no products", async () => {
      (Product.find as jest.Mock).mockResolvedValue([]);
      const response = await request(app).get("/api/v1/product/all");
      expect(response.status).toBe(200);
      expect(response.body.success).toBeTruthy();
      expect(response.body.data).toEqual([]);
    });
  });

  describe("Get single product", () => {
    const singleProduct = {
      _id: "mockId",
      name: "mockName",
      description: "mockDescription",
      price: "mockPrice",
      image: "mockImage",
      category: "mockCategory",
      isFeatured: true,
      brand: "mockBrand",
    };

    it("should return single product", async () => {
      (Product.findById as jest.Mock).mockResolvedValue(singleProduct);
      const response = await request(app).get(
        "/api/v1/product/single-product/123"
      );
      expect(response.status).toBe(200);
      expect(response.body.success).toBeTruthy();
      expect(response.body.data).toEqual(singleProduct);
    });

    it("should return null if product doesnt exist in db", async () => {
      (Product.findById as jest.Mock).mockResolvedValue(null);
      const response = await request(app).get(
        "/api/v1/product/single-product/123"
      );
      expect(response.status).toBe(200);
      expect(response.body.success).toBeTruthy();
      expect(response.body.data).toEqual(null);
    });
  });

  describe("Get Featured Products", () => {
    it("should return featured products", async () => {
      const mockProducts = [
        {
          _id: "mockId",
          name: "mockName",
          description: "mockDescription",
          price: "mockPrice",
          image: "mockImage",
          category: "mockCategory",
          isFeatured: "mockIsFeatured",
        },
      ];
      const mockQuery = {
        limit: jest.fn().mockReturnThis(),
        lean: jest.fn().mockResolvedValue(mockProducts),
      };
      (Product.find as jest.Mock).mockReturnValue(mockQuery);
      const response = await request(app).get("/api/v1/product/featured");

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.data).toBeInstanceOf(Array);
      expect(response.body.data).toStrictEqual(mockProducts);
    });
    it("should return empty array if no featured products", async () => {
      const mockQuery = {
        limit: jest.fn().mockReturnThis(),
        lean: jest.fn().mockResolvedValue([]),
      };
      (Product.find as jest.Mock).mockReturnValue(mockQuery);
      const response = await request(app).get("/api/v1/product/featured");

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.data).toBeInstanceOf(Array);
      expect(response.body.data).toStrictEqual([]);
    });
  });
});
