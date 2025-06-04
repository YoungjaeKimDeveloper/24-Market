import express from "express";

import dotenv from "dotenv";
import morgan from "morgan";
import helmet from "helmet";
import cros from "cors";

import productSchema from "./schema/product.schema";
import productRouter from "./features/product/application/router/product.router";

const initDB = async () => {
  try {
    await productSchema();
  } catch (error: any) {
    console.error("Failed to connectDB ", error.message);
  }
};

const app = express();
dotenv.config();
// Middleware Settings
app.use(express.json());
app.use(morgan("dev"));
app.use(cros());
app.use(helmet());

// Product Route
app.use("/api/products", productRouter);
app.get("/api/product", (req, res) => {
  res.status(200).json({ message: "Hello" });
});

const PORT = process.env.PORT || 3000;

initDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Serever is Running in ${PORT}`);
  });
});
