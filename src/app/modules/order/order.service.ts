import { EOrder } from './order.interface';
import Order from './order.model';

const createOrder = async (payload: EOrder) => {
  const result = await Order.create(payload);
  return result;
};

export const OrderServices = {
  createOrder,
};
