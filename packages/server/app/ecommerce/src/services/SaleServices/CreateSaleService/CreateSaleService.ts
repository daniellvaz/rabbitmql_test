import { SaleDTO } from './SaleDTO';
import mongoose from 'mongoose';
import Mysql from '@microservice/orm';

export default class CreateCustomerService {
  constructor(
    private mysqlRepository: Mysql
  ){}

  async execute(sale: SaleDTO): Promise<void> {
    
  }
}