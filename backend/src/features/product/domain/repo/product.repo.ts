/*
  Repository - contract
*/
import Product from "../entities/product.entity";
export interface ProductRepo {
  createProduct(
    title: string,
    price: number,
    image_url: string
  ): Promise<Product | null>;
  fetchAllProducts(): Promise<Product[] | null>;
  fetchSingleProduct(id: string): Promise<Product | null>;
  updateSingleProduct(
    id: string,
    title: string,
    price: number,
    image_url: string
  ): Promise<Product | null>;
  deleteSingleProduct(id: string): Promise<Product | null>;
}
