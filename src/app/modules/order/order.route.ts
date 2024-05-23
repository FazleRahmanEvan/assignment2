import express from 'express';
import { OrderController } from './order.controler';

const router = express.Router();

router.post('/', OrderController.createProduct);

export const OrderRoutes = router;
