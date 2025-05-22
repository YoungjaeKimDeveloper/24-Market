/*

    Implement Product Repo

*/
import axiosInstance from "../../../config/axiosInstance";

import type ProductRepo from "../domain/repo/product.repo";

class ApiProduct implements ProductRepo {
  // Create Product
  createProduct = async (
    title: string,
    price: number,
    image_url: string
  ): Promise<any> => {
    try {
      const request = await axiosInstance.post(`/`, {
        title,
        price,
        image_url,
      });
      return request.data.newproduct;
    } catch (error: any) {
      console.error(`failed to create new Product ,${error.message}`);
      return null;
    }
  };
  // Fetch All Products
  fetchAllProducts = async (): Promise<any> => {
    try {
      const products = await axiosInstance.get("");
      return products.data.products;
    } catch (error: any) {
      console.debug(
        `Failed to fetch All Products from API ${error.message || ""}}`
      );
      return null;
    } finally {
      console.log("Fetching Product done");
    }
  };
  // Update a Product
  updateSingleProduct = async (
    id: string,
    title: string,
    price: number,
    image_url: string
  ): Promise<any> => {
    try {
      const request = await axiosInstance.put(`/${id}`, {
        title,
        price,
        image_url,
      });
      if (request.status == 201) {
        console.debug("Product has been updated successfully ✅");
      }
    } catch (error) {
      console.error("Failed to update a product");
    }
  };
  // Delete a product
  deleteSingleProduct = async (id: string): Promise<any> => {
    console.log("Id is here", id);
    try {
      const response = await axiosInstance.delete(`${id}`);
      if (response.status == 201) {
        console.debug("Product has been deleted successfully ✅");
      }
    } catch (error) {
      console.error("Failed to update a product");
    }
  };
}

export default ApiProduct;
