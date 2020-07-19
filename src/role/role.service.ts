import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm";
import { Role } from "../entities/Role";


@Injectable()
export class RolService {

  constructor(
    @InjectRepository(Role) private readonly rolRepository: Repository<Role>
  ) { }


  async findAll(): Promise<Role[]> {        //trae todo lo que hay en esa tabla
    return await this.rolRepository.find();
  }

  async Postcreate(role) {
    return this.rolRepository.save({ ...role });
  }

  async read(id: string) {
    return this.rolRepository.findOne({ where: { id } });
  }

  async update(id: number, role: Partial<Role>) {
    await this.rolRepository.update({ id }, role);
    return await this.rolRepository.findOne({ id })
  }

  async destroy(id: number) {
    await this.rolRepository.delete({ id });
    return { deleted: true };
  }



}
