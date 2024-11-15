export type ProductType = {
  _id: string;
  brand: string;
  category: string;
  createdAt: Date;
  description: string;
  isFeatured: boolean;
  image: string;
  name: string;
  price: number;
  slug: number;
  stock: number;
  updatedAt: string;
  isActive: boolean;
  targetAudience: string;
};

export type CartResponse = {
  _id: string;
  product: ProductType;
  quantity: number;
};
