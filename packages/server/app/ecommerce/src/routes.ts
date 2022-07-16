import { findCustomersController } from './services/CustomerServices/FindCustomersService';
import { createCustomerController } from './services/CustomerServices/CreateCustomerService'; 
import { Router } from "express";

const router = Router();

router
  .get("/customers", (req, res) => findCustomersController.execute(req, res))
  .post("/customer/create", (req, res) => createCustomerController.execute(req, res));

export default router;