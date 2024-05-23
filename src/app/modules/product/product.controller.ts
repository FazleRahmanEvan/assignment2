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
    message: 'Product fetched successfully',
    data: result,
  });
};

const getProductId = async (req: Request, res: Response) => {
  const productId = req.params.productId;
  const result = await ProductServices.getProductId(productId);

  res.json({
    success: true,
    message: 'Product fetched successfully',
    data: result,
  });
};

export const ProductController = {
  createProduct,
  getAllProducts,
  getProductId,
};
