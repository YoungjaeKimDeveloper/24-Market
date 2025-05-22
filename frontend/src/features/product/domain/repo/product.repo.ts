/*

- Domain layer
     - main repo interface
    
*/
import type Product from "../entity/product";

export default interface ProductRepo {
  fetchAllProducts(): Promise<Product[] | null>;
  updateSingleProduct(id: string): Promise<Product | null>;
  deleteSingleProduct(id: string): Promise<Product | null>;
}
