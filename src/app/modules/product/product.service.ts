import EProduct, { Query } from './product.interface';
import { Product } from './product.model';

const createProduct = async (payload: EProduct) => {
  const result = await Product.create(payload);
  return result;
};

const getAllProducts = async (searchTerm: Query) => {
  let query = {};
  if (searchTerm) {
    query = {
      $or: [
        { name: { $regex: searchTerm, $options: 'i' } },
        { description: { $regex: searchTerm, $options: 'i' } },
        { category: { $regex: searchTerm, $options: 'i' } },
        { tags: { $regex: searchTerm, $options: 'i' } },
      ],
    };
  }

  const result = await Product.find(query);

  return result;
};

const getProductId = async (productId: string) => {
  const result = await Product.findOne({ _id: productId });
  return result;
};

const updateProductById = async (
  productId: string,
  updatedProduct: EProduct,
) => {
  const result = await Product.findByIdAndUpdate(productId, updatedProduct, {
    new: true,
    upsert: false,
  });

  return result;
};

const deleteAProduct = async (productId: string) => {
  const result = await Product.deleteOne({ _id: productId });

  return result;
};

export const ProductServices = {
  createProduct,
  getAllProducts,
  getProductId,
  updateProductById,
  deleteAProduct,
};
