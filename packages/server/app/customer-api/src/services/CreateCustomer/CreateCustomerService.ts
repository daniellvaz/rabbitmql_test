import mongoose  from 'mongoose';
import Customer from '../../entities/Customer';
import { CustomerDTO, Address } from './CustomerDTO';
import Mysql from '@microservice/orm';

export default class CreateCustomerService {
  constructor(
    private mysqlRepository: Mysql,
    private mongoRepository: mongoose.Model<Address>
  ){}

  async execute({ name, email, addresses }: CustomerDTO): Promise<Customer> {
    const newCustomer = new Customer({ name, email }) 
    const query = `
      INSERT INTO customers 
      (id, name, email)
      values
      ("${newCustomer._id}", "${newCustomer.name}", "${newCustomer.email}")
    `
    await this.mysqlRepository.raw(query)

    for await (const address of addresses) {
      await this.mongoRepository.create({ ...address, userId: newCustomer._id  })
    }

    return newCustomer
  }
}