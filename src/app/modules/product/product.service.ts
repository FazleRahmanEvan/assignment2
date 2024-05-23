import EProduct from './product.interface';
import { Product } from './product.model';

const createProduct = async (payload: EProduct) => {
  const result = await Product.create(payload);
  return result;
};

const getAllProducts = async () => {
  const result = await Product.find();
  return result;
};

const getProductId = async (productId: string) => {
  const result = await Product.findOne({ _id: productId });
  return result;
};

export const ProductServices = {
  createProduct,
  getAllProducts,
  getProductId,
};
