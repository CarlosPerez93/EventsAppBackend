import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm";
import { User } from "./../entities/User";


@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>
  ) { }


  async findAll(): Promise<User[]> {        //trae todo lo que hay en esa tabla
    return await this.userRepository.find();
  }

  async Postcreate(user) {
    return this.userRepository.save({ ...user });
  }

  async read(id: string) {
    return this.userRepository.findOne({ where: { id } });
  }

  async update(id: number, user: Partial<User>) {
    await this.userRepository.update({ id }, user);
    return await this.userRepository.findOne({ id })
  }

  async destroy(id: number) {
    await this.userRepository.delete({ id });
    return { deleted: true };
  }



}
