import { Request, Response } from 'express';
import CreateDeliveryService from './CreateDeliveryService';

export default class CreateDeliveryController {
  constructor(private createDeliveryService: CreateDeliveryService) {}

  async execute(req: Request, res: Response): Promise<Response> {
    const deliveries = await this.createDeliveryService.execute()

    return res.status(200).json({ ok: true, deliveries })
  }
}