import { Request, Response } from 'express';
import FindCustomersService from './FindCustomersService';

export default class FindCustomersController {
  constructor(private findCustomersService: FindCustomersService) {}

  async execute(req: Request, res: Response): Promise<Response> {
    const customers = await this.findCustomersService.execute();

    return res.status(200).json({ ok: true, customers })
  }
}