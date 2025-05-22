/*
    Product interface - frontend
*/
export default interface Product {
  id?: string;
  title: string;
  price: number;
  image_url: string;
  created_At?: Date;
}
