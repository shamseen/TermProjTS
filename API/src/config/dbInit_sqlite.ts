import Product from '../Models/sqlite/Product';
import fs from 'node:fs';
import { db_sqlite } from './db';
import User from '../Models/sqlite/User';

const DIR_PATH = './src/config/mockData';

export async function seedProductsTable() {
  const jsonData = fs.readFileSync(`${DIR_PATH}/products.json`);
  const products = JSON.parse(jsonData.toString());
  // drop any existing tables
  await db_sqlite.sync({ force: true });
  // seed table
  await Product.bulkCreate(products);
  return products;
}

export async function seedUsersTable() {
    const jsonData = fs.readFileSync(`${DIR_PATH}/users.json`);
  const users = JSON.parse(jsonData.toString());
  // drop any existing tables
  await db_sqlite.sync({ force: true });
  // seed table
  await User.bulkCreate(users);
  return users;
}