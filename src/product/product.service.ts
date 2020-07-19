import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm";
import { Product } from "../entities/Product";


@Injectable()
export class ProductService {

  constructor(
    @InjectRepository(Product) private readonly productRepository: Repository<Product>
  ) { }


  async findAll(): Promise<Product[]> {        //trae todo lo que hay en esa tabla
    return await this.productRepository.find();
  }

  async Postcreate(product) {
    return this.productRepository.save({ ...product });
  }

  async read(id: string) {
    return this.productRepository.findOne({ where: { id } });
  }

  async update(id: number, product: Partial<Product>) {
    await this.productRepository.update({ id }, product);
    return await this.productRepository.findOne({ id })
  }

  async destroy(id: number) {
    await this.productRepository.delete({ id });
    return { deleted: true };
  }



}
