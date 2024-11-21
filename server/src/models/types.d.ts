import { Document } from "mongoose";

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
