import { Router } from 'express';
import * as controller from '../Controllers/productController';

const router = Router();

router.get('/products', controller.getAllProducts);

export default router;