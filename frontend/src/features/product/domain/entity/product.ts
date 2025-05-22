/*
    Product interface - frontend
*/

export default interface Product {
  product_id?: string;
  title: string;
  price: number;
  image_url: string;
  created_At?: Date;
}
