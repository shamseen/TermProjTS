import { Router, Request, Response } from 'express';
import { seedProductsTable, seedUsersTable } from '../config/dbInit_sqlite';

const router = Router();

router.get('/products', (req: Request, res: Response) => {
  res.send('go to `products/sqlite `');
});

router.get("/products/sqlite", async (req: Request, res: Response) => {
  const data =  await seedProductsTable();
  res.json(data);
});

router.get("/users/sqlite", async (req: Request, res: Response) => {
  const data =  await seedUsersTable();
  res.json(data);
});

export default router;