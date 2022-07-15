import { Request, Response } from 'express';
import CreateCustomerService from './CreateCustomerService';

export default class CreateCustomerController {
  constructor(private createCustomerService: CreateCustomerService) {}

  async execute(req: Request, res: Response): Promise<Response> {
    const { name, email, addresses } = req.body;
    const customer = await this.createCustomerService.execute({ name, email, addresses });

    return res.status(200).json({ ok: true, customer })
  }
}