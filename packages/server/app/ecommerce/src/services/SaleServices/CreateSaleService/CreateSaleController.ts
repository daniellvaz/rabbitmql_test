import { Request, Response } from 'express';
import CreateSaleService from './CreateSaleService';

export default class CreateSaleController {
  constructor(private createSaleService: CreateSaleService) {}

  async execute(req: Request, res: Response): Promise<Response> {
    const { name, email, addresses } = req.body;
    const sale = await this.createSaleService.execute({ name, email, addresses });

    return res.status(200).json({ ok: true, sale })
  }
}