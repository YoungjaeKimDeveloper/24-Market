/* 
  Product Entity
*/
export default interface Product {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  created_at: Date;
}
