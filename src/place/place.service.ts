import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm";
import { Place } from "../entities/Place";


@Injectable()
export class PlaceService {

  constructor(
    @InjectRepository(Place) private readonly placeRepository: Repository<Place>
  ) { }


  async findAll(): Promise<Place[]> {        //trae todo lo que hay en esa tabla
    return await this.placeRepository.find();
  }

  async Postcreate(place) {
    return this.placeRepository.save({ ...place });
  }

  async read(id: string) {
    return this.placeRepository.findOne({ where: { id } });
  }

  async update(id: number, place: Partial<Place>) {
    await this.placeRepository.update({ id }, place);
    return await this.placeRepository.findOne({ id })
  }

  async destroy(id: number) {
    await this.placeRepository.delete({ id });
    return { deleted: true };
  }



}
