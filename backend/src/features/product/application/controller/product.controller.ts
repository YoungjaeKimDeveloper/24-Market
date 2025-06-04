/*
    User Request <-->  controller 
*/
import { Request, Response } from "express";
import NeonProduct from "../../data/neon.product";

// Singleton - Programming
const neonProduct = new NeonProduct();

// Create new Product - C
export const createProduct = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const { title, price, image_url } = req.body;
    if (!title || !price || !image_url) {
      return res.status(400).json({
        success: false,
        message: "Please fill up the all forms to create a new product",
      });
    } else {
      const newProduct = await neonProduct.createProduct(
        title,
        price,
        image_url
      );
      if (newProduct != null) {
        return res.status(200).json({
          success: true,
          message: "New product has been created successfully ✅",
          product: newProduct,
        });
      } else {
        return res.status(404).json({
          success: false,
          message: "Failed to create new product",
        });
      }
    }
  } catch (error: any) {
    console.debug("Failed to create new Product");
    return res.status(500).json({
      success: false,
      message: `Failed to create a new product ${error.message || ""}`,
    });
  }
};

// Fetch All Products - R
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

// Fetch Single Product -R
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

export const updateSingleProductHandler = async (
  req: Request,
  res: Response
): Promise<any> => {
  const { id } = req.params;
  const { title, price, image_url } = req.body;
  if (id == null) {
    return res
      .status(404)
      .json({ success: false, message: "Product ID is Required" });
  }
  if (!title || !price || !image_url) {
    return res
      .status(400)
      .json({ success: false, message: "Please fill up the all forms" });
  }
  try {
    const updatedProduct = await neonProduct.updateSingleProduct(
      id,
      title,
      price,
      image_url
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
// Delete Product
export const deleteSingleProductHandler = async (
  req: Request,
  res: Response
): Promise<any> => {
  const { id } = req.params;
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
