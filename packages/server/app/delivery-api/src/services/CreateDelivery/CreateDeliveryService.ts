import { v4 as uuid } from "uuid";
import { sales } from "../../data/products.json"
import { Delivery } from './../../entities/Delivery';
import Mysql from '@microservice/orm';

export default class CreateCustomerService {
  constructor(
    private mysqlRepository: Mysql,
  ){}

  async execute(): Promise<Delivery[]> {
    const data = []

    for await (const sale of sales) {
      const newDelivery = new Delivery({ saleId: sale.id, customerId: sale.customerId, trackingCode: uuid() })

      const query = `
        INSERT INTO deliveries 
        (id, sale_id, user_id, tracking_code) 
        VALUES ("${newDelivery._id}", "${newDelivery.saleId}", "${newDelivery.saleId}", "${newDelivery.trackingCode}")
      `

      await this.mysqlRepository.raw(query);

      data.push(newDelivery)
    }

    return data;
  }
}