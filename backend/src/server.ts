import express from "express";
import productRouter from "./routes/product.route";
import dotenv from "dotenv";
import morgan from "morgan";
import helmet from "helmet";

const app = express();
dotenv.config();
// Middleware Settings
app.use(express.json());
app.use(morgan("dev"));
app.use(helmet());

// Product Route
app.use("/api/products", productRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Serever is Running in ${PORT}`);
});
