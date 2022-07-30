import { ProductDTO } from './ProductDTO';
import Mysql from '@microservice/orm';
import Product from '../../../entities/Product';
import Stock from '../../../entities/Stock';

export default class CreateProductService {
  constructor(
    private mysqlRepository: Mysql
  ){}

  async execute(product: ProductDTO): Promise<Product> {
    const newProduct = new Product(product);
    const newStock = new Stock(product.stock);

    const querySelect = `SELECT * FROM products WHERE products.title = "${product.title}" LIMIT 1`
    const 

    const [productAlreadyExists] = await this.mysqlRepository.raw(querySelect);

    if(productAlreadyExists) {
      return productAlreadyExists;
    }


  }
}