import { ParsedQs } from 'qs';

export type EVariant = {
  type: string;
  value: string;
};

export type EInventory = {
  quantity: number;
  inStock: boolean;
};

export type EProduct = {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: [EVariant];
  inventory: EInventory;
};
export type Query = string | ParsedQs | string[] | ParsedQs[] | undefined;

export default EProduct;
