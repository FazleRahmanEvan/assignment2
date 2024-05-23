import { Request, Response } from 'express';
import { OrderServices } from './order.service';

const createProduct = async (req: Request, res: Response) => {
  //   const productData = req.body;
  //   const result = await OrderServices.createOrder(productData);

  //   res.json({
  //     success: true,
  //     message: 'Order is placed successfully',
  //     data: result,
  //   });

  const orderData = req.body;
  try {
    const result = await OrderServices.createOrder(orderData);

    if (result) {
      res.json({
        success: true,
        message: 'Order is placed successfully',
        data: result,
      });
    } else {
      res.json({
        success: false,
        message: ` Insufficient product in stock`,
      });
    }
  } catch (error: any) {
    res.json({
      success: false,
      message: `Order Failed: ${error.message}`,
    });
  }
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
