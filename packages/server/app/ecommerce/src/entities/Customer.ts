import { v4 as uuid } from "uuid";

export default class Customer {
  public _id?: string;
  public name: string;
  public email: string;

  constructor(customer: Customer){
    if(!customer._id) {
      this._id = uuid()
    }

    this.name = customer.name;
    this.email = customer.email;
  }
}