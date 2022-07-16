import { mysqlRepository } from './../../../repositories/mysqlRepository/index';
import CreateSaleService from "./CreateSaleService";
import CreateSaleController from "./CreateSaleController";

const createSaleService = new CreateSaleService(mysqlRepository);
export const createSaleController = new CreateSaleController(createSaleService);