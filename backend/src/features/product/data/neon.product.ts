/*

    Implement the funcaionlity to communicate with Database

*/
import { PostRepo } from "../domain/repo/product.repo";
import Post from "../domain/entities/product.entity";

class NeonProduct implements PostRepo{
    fetchAllProducts(): Promise<Post[]> {
        throw new Error("Method not implemented.");
    }
    fetchSingleProduct(id: string): Promise<Post> {
        throw new Error("Method not implemented.");
    }
    updateSingleProduct(id: string): Promise<Post> {
        throw new Error("Method not implemented.");
    }
    deleteSingleProduct(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

}