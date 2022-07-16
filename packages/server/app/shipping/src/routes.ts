import { findDeliveriesController } from './services/FindDeliveries/index';
import { createDeliveryController } from './services/CreateDelivery/index';
import { Router } from "express";

const router = Router();

router
  .get("/deliveries", (req, res) => findDeliveriesController.execute(req, res))
  .post("/delivery/create", (req, res) => createDeliveryController.execute(req, res));

export default router;