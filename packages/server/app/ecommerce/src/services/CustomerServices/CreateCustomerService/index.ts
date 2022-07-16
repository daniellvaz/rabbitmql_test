import { AddressModel } from './../../../models/Address';
import { mysqlRepository } from './../../../repositories/mysqlRepository';
import CreateCustomerService from "./CreateCustomerService";
import CreateCustomerController from "./CreateCustomerController";

const createCustomerService = new CreateCustomerService(mysqlRepository, AddressModel);
export const createCustomerController = new CreateCustomerController(createCustomerService);