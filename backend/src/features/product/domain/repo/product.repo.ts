/*
  Repository - contract
*/
import Post from "../entities/product.entity";
export interface PostRepo {
  fetchAllProducts(): Promise<Post[]>;
  fetchSingleProduct(id: string): Promise<Post>;
  updateSingleProduct(id: string): Promise<Post>;
  deleteSingleProduct(id: string): Promise<void>;
}
