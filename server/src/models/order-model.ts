import mongoose from "mongoose";
import { IOrder } from "./types";

export const orderSchema = new mongoose.Schema<IOrder>({
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer",
    required: true,
  },
  products: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        min: 1,
      },
      price: {
        type: Number,
        required: true,
        min: 0,
      },
    },
  ],
  totalAmount: {
    type: Number,
    required: true,
    min: 0,
  },
  stripeSessionId: {
    type: String,
    unique: true,
  },
});

export const Order = mongoose.model<IOrder>("Order", orderSchema);
