import Product from '../Models/sqlite/Product';
import fs from 'node:fs';
import { db_sqlite } from './db';

const folderPath = './src/config/mockData';

export async function seedProductsTable() {
  const jsonData = fs.readFileSync(`${folderPath}/products.json`);
  const products = JSON.parse(jsonData.toString());
  // drop any existing tables
  await db_sqlite.sync({ force: true });
  // seed table
  await Product.bulkCreate(products);
  return products;
}