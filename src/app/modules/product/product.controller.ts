import { Request, Response } from 'express';
import { ProductServices } from './product.service';
import EProduct from './product.interface';

const createProduct = async (req: Request, res: Response) => {
  const { product: productData } = req.body;
  const result = await ProductServices.createProduct(productData);

  res.json({
    success: true,
    message: 'Product is created successfully',
    data: result,
  });
};

const getAllProducts = async (req: Request, res: Response) => {
  const result = await ProductServices.getAllProducts();

  res.json({
    success: true,
    message: 'Products are retrieved successfully',
    data: result,
  });
};

const getProductId = async (req: Request, res: Response) => {
  const productId = req.params.productId;
  const result = await ProductServices.getProductId(productId);

  res.json({
    success: true,
    message: 'Product is retrieved successfully',
    data: result,
  });
};

const updateProductById = async (req: Request, res: Response) => {
  const productId = req.params.productId;
  const updatedProduct = req.body;
  const result = await ProductServices.updateProductById(
    productId,
    updatedProduct,
  );

  res.json({
    success: true,
    message: 'Product is updated successfully',
    data: result,
  });
};

const deleteAProduct = async (req: Request, res: Response) => {
  const productId = req.params.productId;
  const result = await ProductServices.deleteAProduct(productId);

  res.json({
    success: true,
    message: 'Product is deleted successfully',
    data: result,
  });
};

export const ProductController = {
  createProduct,
  getAllProducts,
  getProductId,
  updateProductById,
  deleteAProduct,
};
