import Mysql from '../../repository/mysqlRepository/Mysql'; 

export default class FindDeliveriesService {
  constructor(private mysqlRepository: Mysql){}

  async execute(): Promise<any> {
    const results = await this.mysqlRepository.raw(`SELECT * FROM Deliveries`);


    return results;
  }
}