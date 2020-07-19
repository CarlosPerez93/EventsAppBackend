import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm";
import { TypeEvent } from "./../entities/TypeEvent";



@Injectable()
export class TypeEventService {

  constructor(
    @InjectRepository(TypeEvent) private readonly typeEventRepository: Repository<TypeEvent>
  ) { }


  async findAll(): Promise<TypeEvent[]> {        //trae todo lo que hay en esa tabla
    return await this.typeEventRepository.find();
  }

  async Postcreate(typeEvent) {
    return this.typeEventRepository.save({ ...typeEvent });
  }

  async read(id: string) {
    return this.typeEventRepository.findOne({ where: { id } });
  }

  async update(id: number, user: Partial<TypeEvent>) {
    await this.typeEventRepository.update({ id }, user);
    return await this.typeEventRepository.findOne({ id })
  }

  async destroy(id: number) {
    await this.typeEventRepository.delete({ id });
    return { deleted: true };
  }



}
