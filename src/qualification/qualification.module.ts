import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QualificationController } from './qualification.controller';
import { QualificationService } from './qualification.service';
import { Qualification } from "../entities/Qualification";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Qualification
    ])
  ],
  controllers: [QualificationController],
  providers: [QualificationService]
})
export class QualificationModule { }
