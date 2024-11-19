import { Document } from "mongoose";

export interface ICartItems {
  quantity: number;
  product: ObjectId;
}

export interface CartItem extends ICartItems {
  _id: string;
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
  stock: number;
  isActive: boolean;
  targetAudience: string;
  brand: string;
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

export interface ICoupon extends Document {
  code: string;
  discountPercentage: number;
  expirationDate: Date;
  isActive: boolean;
  customerId: ObjectId;
}

interface OrdersItems {
  product: IProduct;
  quantity: number;
  price: number;
}

export interface IOrder extends Document {
  customer: ObjectId;
  products: OrdersItems[];
  totalAmount: number;
  stripeSessionId: string;
}
