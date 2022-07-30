import mongoose  from 'mongoose';
import Customer from '../../../entities/Customer';
import { CustomerDTO } from './CustomerDTO';
import Mysql from '@microservice/orm';
import Address from '../../../entities/Address';

export default class CreateCustomerService {
  constructor(
    private mysqlRepository: Mysql,
    private mongoRepository: mongoose.Model<Address>
  ){}

  async execute({ name, email, addresses }: CustomerDTO): Promise<Customer> {
    const [customerAlreadyExists] = await this.mysqlRepository.raw(`SELECT * FROM customers WHERE customers.email = "${email}"`)
    
    if(customerAlreadyExists) {
      throw new Error(`Customer ${name} already exists!`)
    }

    const newCustomer = new Customer({ name, email }) 
    const queryCustomer = `
      INSERT INTO customers 
      (id, name, email)
      values
      ("${newCustomer.id}", "${newCustomer.name}", "${newCustomer.email}")
    `
    await this.mysqlRepository.raw(queryCustomer)

    for await (const address of addresses) {
      const { street, number, zipCode, city, country } = address;

      const [addressAlreadyExists] = await this.mysqlRepository.raw(`SELECT * FROM addresses WHERE addresses.zip_code = ${zipCode} LIMIT 1`)

      if(!addressAlreadyExists) {
        const newAddress = new Address({ street, number, zipCode, city, country });
        const queryAddress = `
          INSERT INTO addresses 
          (id, street, number, zip_code, city, country)
          values
          (
            "${newAddress.id}", 
            "${newAddress.street}", 
            "${newAddress.number}", 
            "${newAddress.zipCode}", 
            "${newAddress.city}", 
            "${newAddress.country}"
          )
        `;

        await this.mysqlRepository.raw(queryAddress);

        const queryAddressesOnCustomer = `
          INSERT INTO addresses_on_customer 
          (customer_id, address_id)
          values
          ("${newCustomer.id}", "${newAddress.id}")
        `;

        await this.mysqlRepository.raw(queryAddressesOnCustomer);

        return newCustomer;
      }
      
      const queryAddressesOnCustomer = `
        INSERT INTO addresses_on_customer 
        (customer_id, address_id)
        values
        ("${newCustomer.id}", "${addressAlreadyExists.id}")
      `;

      await this.mysqlRepository.raw(queryAddressesOnCustomer);
    }

    return newCustomer
  }
}