import mongoose from 'mongoose';
import Mysql from '@microservice/orm';
import Customer from '../../../entities/Customer';
import Address from '../../../entities/Address';

export default class FindCustomersService {
  constructor(private mysqlRepository: Mysql, private mongoRepository: mongoose.Model<Address>){}

  async execute(): Promise<any> {
    const query = ` 
      SELECT 
        customers.*,
        addresses.*
      FROM customers
      LEFT JOIN addresses_on_customer ON addresses_on_customer.customer_id = customers.id
      LEFT JOIN addresses ON addresses.id = addresses_on_customer.address_id
    `
    const results = await this.mysqlRepository.raw(query);
    const customers = results.map((customer: any) => {
      return {
        name: customer.name,
        email: customer.email,
        addresses: [
          { 
            street: customer.street,
            number: customer.number,
            zipCode: customer.zip_code,
            city: customer.city,
            country: customer.country,
          }
        ]
      }
    })
    
    return customers;
  }
}