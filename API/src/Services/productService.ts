import Product from '../Models/sqlite/Product';

export const getAllProducts = async () => {
  const products = await Product.findAll();

  return products;
}