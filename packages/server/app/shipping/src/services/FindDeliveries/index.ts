import { mysqlRepository } from '../../repository/mysqlRepository'; 
import FindDeliveriesService from "./FindDeliveriesService";
import FindDeliveriesController from "./FindDeliveriesController";

const findDeliveriesService = new FindDeliveriesService(mysqlRepository);
export const findDeliveriesController = new FindDeliveriesController(findDeliveriesService)