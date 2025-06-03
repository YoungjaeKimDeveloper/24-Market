/* eslint-disable @typescript-eslint/no-explicit-any */
/*

- Domain layer
     - main repo interface
    
*/
export default interface ProductRepo {
  // - C
  createProduct(title: string, price: number, image_url: string): Promise<any>;
  // - R
  fetchAllProducts(): Promise<any>;
  // - U
  updateSingleProduct(
    id: string,
    title: string,
    price: number,
    image_url: string
  ): Promise<any>;
  // - D
  deleteSingleProduct(id: string): Promise<any>;
}
