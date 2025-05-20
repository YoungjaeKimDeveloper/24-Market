import { Request, Response } from "express";
import NeonProduct from "../../data/neon.product";

// Singleton - Programming
const neonProduct = new NeonProduct();

// Fetch All Products
export const fetchAllProductsHandler = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const products = await neonProduct.fetchAllProducts();
    if (products !== null && products.length != 0) {
      return res.status(200).json({ success: true, products: products });
    } else {
      return res
        .status(404)
        .json({ success: false, message: "No Products", products: [] });
    }
  } catch (error: any) {
    console.error("Failed to fetch All Products ", error);
    return res.status(500).json({
      success: false,
      message: `Failed to fetch all products ${error.message || ""}`,
    });
  }
};

// Fetch Single Product
export const fetchSingleProductHandler = async (
  req: Request,
  res: Response
): Promise<any> => {
  const { id } = req.params;
  if (id == null) {
    return res
      .status(404)
      .json({ success: false, message: "Product ID is Required" });
  }
  try {
    const product = await neonProduct.fetchSingleProduct(id);
    if (product == null) {
      return res
        .status(404)
        .json({ success: false, message: "Cannot find a product" });
    } else {
      return res.status(200).json({ success: true, product: product });
    }
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: `Failed to fetch a product ${error.message || ""}`,
    });
  }
};

export const updateAProductHandler = async (
  req: Request,
  res: Response
): Promise<any> => {
  const { id } = req.params;
  const { title, price, imageUrl } = req.body;
  if (id == null) {
    return res
      .status(404)
      .json({ success: false, message: "Product ID is Required" });
  }
  if (!title || !price || !imageUrl) {
    return res
      .status(400)
      .json({ success: false, message: "Please fill up the all forms" });
  }
  try {
    const updatedProduct = await neonProduct.updateSingleProduct(
      id,
      title,
      price,
      imageUrl
    );
    if (updatedProduct == null) {
      return res
        .status(404)
        .json({ success: false, message: "Failed to update product " });
    } else {
      return res
        .status(201)
        .json({ success: true, message: "Product updated successfully" });
    }
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: `Failed to fetch a product ${error.message || ""}`,
    });
  }
};

export const deleteAProductHandler = async (
  req: Request,
  res: Response
): Promise<any> => {
  const { id } = req.body;
  if (id == null) {
    return res.status(404).json({
      success: false,
      message: "Product ID is requried to delete Product",
    });
  }
  try {
    const deletedProduct = await neonProduct.deleteSingleProduct(id);
    if (deletedProduct == null) {
      return res
        .status(404)
        .json({ success: false, message: "Failed to delete the product" });
    }
    return res.status(201).json({
      success: true,
      message: "Product has been deleted successfully",
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: `Failed to delete a product ${error.message || ""}`,
    });
  }
};
