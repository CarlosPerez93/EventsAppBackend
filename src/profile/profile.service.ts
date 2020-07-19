import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm";
import { Profile } from "../entities/Profile";


@Injectable()
export class ProfileService {

  constructor(
    @InjectRepository(Profile) private readonly profileRepository: Repository<Profile>
  ) { }


  async findAll(): Promise<Profile[]> {        //trae todo lo que hay en esa tabla
    return await this.profileRepository.find();
  }

  async Postcreate(profile) {
    return this.profileRepository.save({ ...profile });
  }

  async read(id: string) {
    return this.profileRepository.findOne({ where: { id } });
  }

  async update(id: number, profile: Partial<Profile>) {
    await this.profileRepository.update({ id }, profile);
    return await this.profileRepository.findOne({ id })
  }

  async destroy(id: number) {
    await this.profileRepository.delete({ id });
    return { deleted: true };
  }



}
