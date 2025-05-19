import express, { Request, Response } from "express";
import productRouter from "./routes/product.route";
import dotenv from "dotenv";
import morgan from "morgan";
import helmet from "helmet";
const app = express();

dotenv.config();
app.use(morgan("dev"));
app.use(express.json());
app.use(helmet());

app.use("/api/products", productRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Serever is Running in ${PORT}`);
});
