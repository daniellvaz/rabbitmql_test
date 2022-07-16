import { Request, Response } from 'express';
import FindSalesService from './FindSalesService';

export default class FindSalesController {
  constructor(private findSalesService: FindSalesService) {}

  async execute(req: Request, res: Response): Promise<Response> {
    const sales = await this.findSalesService.execute();

    return res.status(200).json({ ok: true, sales })
  }
}