import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeEventController } from './typeEvent.controller';
import { TypeEventService } from './typeEvent.service';
import { TypeEvent } from "../entities/TypeEvent";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      TypeEvent
    ])
  ],
  controllers: [TypeEventController],
  providers: [TypeEventService]
})
export class TypeEventModule { }
