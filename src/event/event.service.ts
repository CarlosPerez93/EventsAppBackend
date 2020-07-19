import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm";
import { Event } from "../entities/Event";


@Injectable()
export class EventService {

  constructor(
    @InjectRepository(Event) private readonly eventRepository: Repository<Event>
  ) { }


  async findAll(): Promise<Event[]> {        //trae todo lo que hay en esa tabla
    return await this.eventRepository.find();
  }

  async Postcreate(event) {
    return this.eventRepository.save({ ...event });
  }

  async read(id: string) {
    return this.eventRepository.findOne({ where: { id } });
  }

  async update(id: number, event: Partial<Event>) {
    await this.eventRepository.update({ id }, event);
    return await this.eventRepository.findOne({ id })
  }

  async destroy(id: number) {
    await this.eventRepository.delete({ id });
    return { deleted: true };
  }



}
