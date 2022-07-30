import { v4 as uuid } from "uuid";

export default class Stock {
  public id?: string;
  public productId: string;
  public amount: number;
  public image: string;

  constructor(stock: Stock){
    if(!stock.id) {
      this.id = uuid()
    }

    this.productId = stock.productId;
    this.amount = stock.amount;
    this.image = stock.image;
  }
}