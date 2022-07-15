import { Router } from "express";
import Rabbitmql from "../rabbitmq.server";

const router = Router();



router
  .post("/create/customer", async (req, res) => {
    const data = req.body

    const server = new Rabbitmql("amqp://admin:123456@rabbitmq:5672")
    await server.start()

    const result = await server.publishInQueue("app:customer", JSON.stringify(data));

    return res.status(200).json({ ok: result })
  });


export default router;