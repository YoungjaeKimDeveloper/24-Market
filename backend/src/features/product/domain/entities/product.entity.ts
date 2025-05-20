/* 
  Product Entity
*/
export default interface Product {
  id: number;
  title: string;
  price: number;
  image_url: string;
  created_at: Date;
}
