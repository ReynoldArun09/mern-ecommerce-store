export interface ICartItems {
  quantity: number;
  product: ObjectId;
}

export type JWTPayloadType = {
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
