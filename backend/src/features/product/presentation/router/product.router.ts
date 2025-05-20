/*
    Produt Endpoint 
*/
import express from "express";

const productRouter = express.Router();

// fetchAllProducts

productRouter.get("/", (req, res) => {});
// fetchSingleProduct
productRouter.get("/:id", (req, res) => {});
// updateSingleProduct
productRouter.put("/:id", (req, res) => {});
// deleteSingleProduct
productRouter.delete("/:id", (req, res) => {});
export default productRouter;
