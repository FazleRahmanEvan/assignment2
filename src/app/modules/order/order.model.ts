import mongoose, { Schema, model, Document } from 'mongoose';
import { EOrder } from './order.interface';

const orderSchema = new Schema<EOrder>({
  email: {
    type: String,
    required: true,
  },
  productId: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const Order = mongoose.model('Order', orderSchema);

export default Order;
