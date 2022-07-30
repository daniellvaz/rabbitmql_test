import { v4 as uuid } from "uuid";

export default class Address {
  public id?: string;
  public street: string;
  public number: number;
  public zipCode: string;
  public city: string;
  public country: string;

  constructor(address: Address){
    if(!address.id) {
      this.id = uuid()
    }

    this.street = address.street;
    this.number = address.number;
    this.zipCode = address.zipCode;
    this.city = address.city;
    this.country = address.country;
  }
}