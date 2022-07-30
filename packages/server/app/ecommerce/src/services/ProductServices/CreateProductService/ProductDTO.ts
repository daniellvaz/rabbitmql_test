export interface Stock {
  productId: string;
  amount: number;
  image: string;
}

export interface ProductDTO {
  title: string;
  description: string;
  stock: Stock
}