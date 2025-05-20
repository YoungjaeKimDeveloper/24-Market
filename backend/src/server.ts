import express from "express";

import dotenv from "dotenv";
import morgan from "morgan";
import helmet from "helmet";

import productSchema from "./schema/product.schema";
import productRouter from "./features/product/presentation/router/product.router";

const initDB = async () => {
  try {
    await productSchema();
  } catch (error) {
    console.log("Failed to connectDB❌");
  }
};

const app = express();
dotenv.config();
// Middleware Settings
app.use(express.json());
app.use(morgan("dev"));
app.use(helmet());

// Product Route
app.use("/api/products", productRouter);

const PORT = process.env.PORT || 3000;

initDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Serever is Running in ${PORT}`);
  });
});
