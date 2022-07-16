import mongoose from 'mongoose';
import Mysql from '@microservice/orm';

export default class FindCustomersService {
  constructor(private mysqlRepository: Mysql){}

  async execute(): Promise<void> {
    
  }
}