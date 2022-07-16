export interface Address {
  userId: number,
  street: string;
  number: number;
  zipCode: string;
  city: string;
}

export interface CustomerDTO {
  name: string;
  email: string;
  addresses: Address[]
}