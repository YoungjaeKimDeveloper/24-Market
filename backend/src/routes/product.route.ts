import express from "express";
import { getAllProducts } from "../controllers/product.controller";

const router = express.Router();
// Route - Action
router.get("/", getAllProducts);



export default router;

