/*
  Repository - contract
*/
import Product from "../entities/product.entity";
export interface ProductRepo {
  fetchAllProducts(): Promise<Product[] | null>;
  fetchSingleProduct(id: string): Promise<Product | null>;
  updateSingleProduct(
    id: string,
    title: string,
    price: number,
    imageUrl: string
  ): Promise<Product | null>;
  deleteSingleProduct(id: string): Promise<Product | null>;
}
