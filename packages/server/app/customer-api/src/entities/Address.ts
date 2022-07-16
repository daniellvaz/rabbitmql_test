export default class Address {
  public _id?: string;
  public userId: number;
  public street: string;
  public number: number;
  public zipCode: string;
  public city: string;

  constructor(address: Address){
    this.userId = address.userId;
    this.street = address.street;
    this.number = address.number;
    this.zipCode = address.zipCode;
    this.city = address.city;
  }
}