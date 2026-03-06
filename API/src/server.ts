import express, { Application, Request, Response } from "express";

const app: Application = express();
const PORT = 3000; // The port your express server will be running on.

// Enable URL-encoded form data parsing
app.use(express.urlencoded({ extended: true }));

// Middleware to parse JSON bodies
app.use(express.json());

// Basic route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript + Express!');
});

import dbInitRoutes from './Routes/dbinitRoutes';
import productRoutes from './Routes/productRoutes';

app.use('/dbinit', dbInitRoutes);
app.use('/api', productRoutes);


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});