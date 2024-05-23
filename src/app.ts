import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { ProductRoutes } from './app/modules/product/product.route';
import router from './app/routes';

const app: Application = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.use('/api', router);

app.use('/api/products', ProductRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
