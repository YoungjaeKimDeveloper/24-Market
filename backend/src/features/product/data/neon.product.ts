/*

    Implement the funcaionlity to communicate with Database
    실제 DB와 연결되는곳 - Repository
    SQL SingleTon

*/
import { ProductRepo } from "../domain/repo/product.repo";
import Product from "../domain/entities/product.entity";
import sql from "../../../config/db";
import productRouter from "../application/router/product.router";
// Follow the contract
class NeonProduct implements ProductRepo {
  // CreateProduct - C
  createProduct = async (
    title: string,
    price: number,
    image_url: string
  ): Promise<Product | null> => {
    try {
      const newProduct = await sql`
            INSERT INTO product (title,price,image_url)
            VALUES (${title},${price},${image_url})
            RETURNING *;
      `;
      if (newProduct == null) {
        return null;
      } else {
        return newProduct[0] as Product;
      }
    } catch (error) {
      console.error(`Faiiled to create single product: ${error}`);
      return null;
    }
  };
  // Fetch All Products - R
  fetchAllProducts = async (): Promise<Product[] | null> => {
    try {
      const products = await sql`
            SELECT *
            FROM product
            `;
      if (products != null) {
        return products as Product[];
      } else {
        return [];
      }
    } catch (error) {
      console.error("Failed to fetchAll Products");
      return [];
    }
  };

  // Fetch single Product - R
  fetchSingleProduct = async (id: string): Promise<Product | null> => {
    try {
      const singleProduct = await sql`
            SELECT *
            FROM product
            WHERE product_id = ${id};
        `;
      if (singleProduct != null) {
        return singleProduct[0] as Product;
      } else {
        return null;
      }
    } catch (error) {
      console.error(`Faiiled to fetch single product: ${error}`);
      return null;
    }
  };
  // Update Product - U
  updateSingleProduct = async (
    id: string,
    title: string,
    price: number,
    image_url: string
  ): Promise<Product | null> => {
    try {
      const updatedProduct = await sql`
      UPDATE product
      SET title = ${title},
          price = ${price},
          image_url = ${image_url}
      WHERE product_id = ${id}
      RETURNING *
      `;
      if (updatedProduct) {
        return updatedProduct[0] as Product;
      } else {
        return null;
      }
    } catch (error) {
      console.error(`Failed to update Product ${error! || ""}`);
      return null;
    }
  };
  // Update Product - D
  deleteSingleProduct = async (id: string): Promise<Product | null> => {
    try {
      const deletedPost = await sql`
        DELETE FROM product
        WHERE product_id = ${id}
        RETURNING *;
        `;
      if (deletedPost != null) {
        return deletedPost[0] as Product;
      } else {
        return null;
      }
    } catch (error) {
      console.error(`Failed to deleteProduct ${error}`);
      return null;
    }
  };
}

export default NeonProduct;
