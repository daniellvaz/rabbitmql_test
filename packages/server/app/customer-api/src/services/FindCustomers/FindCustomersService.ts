import { Address } from './../CreateCustomer/CustomerDTO';
import mongoose from 'mongoose';
import Mysql from '../../repositories/mysqlRepository/Mysql';
import Customer from '../../entities/Customer';

export default class FindCustomersService {
  constructor(private mysqlRepository: Mysql, private mongoRepository: mongoose.Model<Address>){}

  async execute(): Promise<any> {
    const results = await this.mysqlRepository.raw(`SELECT * FROM customers`);

    const customers: Customer[] = [];

    for await(const customer of results) {
      const addresses = await this.mongoRepository.findOne({ userId: customer.id });

      customers.push({ ...customer, addresses: [addresses] })
    }
    
    return customers;
  }
}