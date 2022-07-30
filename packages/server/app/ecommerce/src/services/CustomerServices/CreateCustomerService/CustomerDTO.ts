export interface Address {
  street: string;
  number: number;
  zipCode: string;
  city: string;
  country: string;
}

export interface CustomerDTO {
  name: string;
  email: string;
  addresses: Address[]
}