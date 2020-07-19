import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm";
import { Service } from "../entities/Service";


@Injectable()
export class ServicesService {

  constructor(
    @InjectRepository(Service) private readonly servicesRepository: Repository<Service>
  ) { }


  async findAll(): Promise<Service[]> {        //trae todo lo que hay en esa tabla
    return await this.servicesRepository.find();
  }

  async Postcreate(service) {
    return this.servicesRepository.save({ ...service });
  }

  async read(id: string) {
    return this.servicesRepository.findOne({ where: { id } });
  }

  async update(id: number, service: Partial<Service>) {
    await this.servicesRepository.update({ id }, service);
    return await this.servicesRepository.findOne({ id })
  }

  async destroy(id: number) {
    await this.servicesRepository.delete({ id });
    return { deleted: true };
  }



}
