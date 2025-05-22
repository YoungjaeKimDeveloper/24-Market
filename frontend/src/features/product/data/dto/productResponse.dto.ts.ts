import type Product from "../../domain/entity/product";
// Fot Zustand
export default interface ProductStore {
  data: Product[];
  isLoading: boolean;
  errorMessage: string;
  fetchAllProducts: () => Promise<void>;
  createProduct: (
    title: string,
    price: number,
    image_url: string
  ) => Promise<void>;
  updateSingleProduct: (
    id: string,
    title: string,
    price: number,
    image_url: string
  ) => Promise<void>;
  deleteSingleProduct: (id: string) => Promise<void>;
}
