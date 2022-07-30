import { v4 as uuid } from "uuid";
import Stock from "./Stock";

export default class Product {
  public id?: string;
  public title: string;
  public description: string;
  public stock?: Stock;

  constructor(product: Product){
    if(!product.id) {
      this.id = uuid()
    }

    this.title = product.title;
    this.description = product.description;
    
    if(product.stock) {
      this.stock = product.stock;
    }
  }
}