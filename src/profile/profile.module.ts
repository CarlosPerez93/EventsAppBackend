import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfileController } from './profile.controller';
import { ProfileService } from './profile.service';
import { Profile } from "../entities/Profile";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Profile
    ])
  ],
  controllers: [ProfileController],
  providers: [ProfileService]
})
export class ProfileModule { }
