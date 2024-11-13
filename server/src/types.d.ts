import { Document } from "mongoose";

export interface ICartItems {
  quantity: number;
  product: ObjectId;
}

export interface ICustomer extends Document {
  name: string;
  email: string;
  password: string;
  role: "customer" | "admin";
  cartItems: ICartItems[];
}

export interface IProduct extends Document {
  name: string;
  slug: string;
  price: number;
  description: string;
  image: string;
  category: string;
  isFeatured: boolean;
}
type JWTPayloadType = {
  _id: ObjectId;
  name: string;
  email: string;
  role: "customer" | "admin";
  cartItems: ICartItems[];
};

declare global {
  namespace Express {
    interface Request {
      user: JWTPayloadType;
    }
  }
}
