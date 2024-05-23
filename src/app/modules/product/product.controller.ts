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

export const ProductController = {
  createProduct,
};
