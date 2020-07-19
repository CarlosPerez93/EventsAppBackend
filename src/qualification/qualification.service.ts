import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm";
import { Qualification } from "../entities/Qualification";


@Injectable()
export class QualificationService {

  constructor(
    @InjectRepository(Qualification) private readonly qualificationRepository: Repository<Qualification>
  ) { }


  async findAll(): Promise<Qualification[]> {        //trae todo lo que hay en esa tabla
    return await this.qualificationRepository.find();
  }

  async Postcreate(qualification) {
    return this.qualificationRepository.save({ ...qualification });
  }

  async read(id: string) {
    return this.qualificationRepository.findOne({ where: { id } });
  }

  async update(id: number, qualification: Partial<Qualification>) {
    await this.qualificationRepository.update({ id }, qualification);
    return await this.qualificationRepository.findOne({ id })
  }

  async destroy(id: number) {
    await this.qualificationRepository.delete({ id });
    return { deleted: true };
  }



}
