import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleController } from './role.controller';
import { RolService } from './role.service';
import { Role } from "../entities/Role";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Role
    ])
  ],
  controllers: [RoleController],
  providers: [RolService]
})
export class RolModule { }
