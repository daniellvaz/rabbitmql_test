import { findCustomersController } from './services/FindCustomers/index';
import { createCustomerController } from './services/CreateCustomer/index';
import { Router } from "express";
import Rabbitmql from '../rabbitmq.server';

const router = Router();

const server = new Rabbitmql("amqp://admin:123456@rabbitmq:5672")
server.start()

// router
//   .get("/customers", (req, res) => findCustomersController.execute(req, res))
//   .post("/customer/create", (req, res) => createCustomerController.execute(req, res));

export default router;