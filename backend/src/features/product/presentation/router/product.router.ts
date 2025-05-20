/*
    Produt Endpoint 
*/
import express from "express";
import {
  deleteAProductHandler,
  fetchAllProductsHandler,
  fetchSingleProductHandler,
  updateAProductHandler,
} from "../controller/product.controller";

const productRouter = express.Router();

// fetchAllProducts
productRouter.get("/", fetchAllProductsHandler);
// fetchSingleProduct
productRouter.get("/:id", fetchSingleProductHandler);
// updateSingleProduct
productRouter.put("/:id", updateAProductHandler);
// deleteSingleProduct
productRouter.delete("/:id", deleteAProductHandler);
export default productRouter;
