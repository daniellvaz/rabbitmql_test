import { DeliverySchema } from './../../models/Delivery';
import { mysqlRepository } from "../../repository/mysqlRepository"; 
import CreateDeliveryService from "./CreateDeliveryService";
import CreateDeliveryController from "./CreateDeliveryController";

const createDeliveryService = new CreateDeliveryService(mysqlRepository);
export const createDeliveryController = new CreateDeliveryController(createDeliveryService);