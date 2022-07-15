import { v4 as uuid } from "uuid";

export class Delivery {
  public _id?: string;
  public saleId: number;
  public customerId: string;
  public trackingCode: string;

  constructor(delivery: Delivery) {
    if(!delivery._id) {
      this._id = uuid()
    }

    this.saleId = delivery.saleId;
    this.customerId = delivery.customerId;
    this.trackingCode = delivery.trackingCode;
  }
}