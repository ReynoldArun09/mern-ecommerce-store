import { Document } from "mongoose";

type JWTPayloadType = {
  _id: ObjectId;
  name: string;
  email: string;
  role: "customer" | "admin";
};

declare global {
  namespace Express {
    interface Request {
      user: JWTPayloadType;
    }
  }
}

interface ICartItems {
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
