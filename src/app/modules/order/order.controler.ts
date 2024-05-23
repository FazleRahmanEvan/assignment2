import { Request, Response } from 'express';
import { OrderServices } from './order.service';
const createProduct = async (req: Request, res: Response) => {
  const productData = req.body;
  const result = await OrderServices.createOrder(productData);

  res.json({
    success: true,
    message: 'Order is placed successfully',
    data: result,
  });
};
// const retrieveAllOrders = async (req: Request, res: Response) => {
//   const result = await OrderServices.retrieveAllOrders();

//   res.json({
//     success: true,
//     message: 'Order is placed successfully',
//     data: result,
//   });
// };

const retrieveAllOrders = async (req: Request, res: Response) => {
  const queryEmail = req.query.email;
  const result = await OrderServices.retrieveAllOrders(queryEmail);

  res.json({
    success: true,
    message: 'Order placed successfully',
    data: result,
  });
};

export const OrderController = {
  createProduct,
  retrieveAllOrders,
};
