import { AddressModel } from './../../../models/Address';
import { mysqlRepository } from './../../../repositories/mysqlRepository';
import FindCustomersService from "./FindCustomersService";
import FindCustomersController from "./FindCustomersController";

const findCustomersService = new FindCustomersService(mysqlRepository, AddressModel);
export const findCustomersController = new FindCustomersController(findCustomersService)