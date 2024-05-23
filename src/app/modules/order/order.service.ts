import { Product } from '../product/product.model';
import { EOrder } from './order.interface';
import Order from './order.model';

const createOrder = async (payload: EOrder) => {
  //   const result = await Order.create(payload);
  //   return result;
  const productId = payload.productId;

  const productOld = await Product.findOne({ _id: productId });

  if (
    productOld?.inventory?.inStock &&
    productOld?.inventory?.quantity - payload?.quantity >= 0
  ) {
    const newQuantity = productOld.inventory.quantity - payload.quantity;
    console.log(newQuantity);
    const result = await Order.create(payload);
    await Product.findByIdAndUpdate(productId, {
      'inventory.quantity': newQuantity,
      'inventory.inStock': !(newQuantity === 0),
    });
    return result;
  } else {
    return;
  }
};

// const retrieveAllOrders = async () => {
//   const result = await Order.find({});
//   return result;
// };

const retrieveAllOrders = async (queryEmail: any) => {
  if (queryEmail) {
    return await Order.find({ email: queryEmail });
  }
  return await Order.find({});
};

export const OrderServices = {
  createOrder,
  retrieveAllOrders,
};
