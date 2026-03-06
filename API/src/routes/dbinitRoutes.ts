import { Router, Request, Response } from 'express';
import { seedProductsTable } from '../config/dbInit_sqlite';

const router = Router();

router.get('/products', (req: Request, res: Response) => {
  res.send('go to `products/sqlite `');
});

router.get("/products/sqlite", async (req: Request, res: Response) => {
  const data =  await seedProductsTable();
  res.json(data);
});

export default router;