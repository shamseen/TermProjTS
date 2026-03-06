import { Request, Response } from 'express';
import * as service from '../Services/productService';

export const getAllProducts = async (req: Request, res: Response) => {
  const products = await service.getAllProducts();
  res.json(products);
}