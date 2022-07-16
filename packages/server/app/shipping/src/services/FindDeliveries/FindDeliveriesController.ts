import { Request, Response } from 'express';
import FindDeliveriesService from './FindDeliveriesService';

export default class FindDeliveriesController {
  constructor(private findDeliveriesService: FindDeliveriesService) {}

  async execute(req: Request, res: Response): Promise<Response> {
    const Deliveries = await this.findDeliveriesService.execute();

    return res.status(200).json({ ok: true, Deliveries })
  }
}