import { mysqlRepository } from './../../../repositories/mysqlRepository/index';
import FindSalesService from "./FindSalesService";
import FindSalesController from "./FindSalesController";

const findSalesService = new FindSalesService(mysqlRepository);
export const findSalesController = new FindSalesController(findSalesService)