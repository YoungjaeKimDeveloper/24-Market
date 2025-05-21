/*
    Produt Endpoint 
*/
import express from "express";
import {
  createProduct,
  deleteSingleProductHandler,
  fetchAllProductsHandler,
  fetchSingleProductHandler,
  updateSingleProductHandler,
} from "../controller/product.controller";

const productRouter = express.Router();

// Create new Product
productRouter.post("/", createProduct);
// fetchAllProducts - R
productRouter.get("/", fetchAllProductsHandler);
// fetchSingleProduct - R
productRouter.get("/:id", fetchSingleProductHandler);
// updateSingleProduct -U
productRouter.put("/:id", updateSingleProductHandler);
// deleteSingleProduct -D
productRouter.delete("/:id", deleteSingleProductHandler);
export default productRouter;
