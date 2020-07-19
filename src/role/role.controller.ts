import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param } from '@nestjs/common';
import { CreateRoleDTO } from "./dto/role.dto";
import { RolService } from "./role.service";
import { Role } from 'src/entities/Role';

@Controller('role')
export class RoleController {

    constructor(private readonly roleService: RolService) { }

    @Get()
    findAll(): Promise<Role[]> {
        return this.roleService.findAll();
    }

    @Post('create')
    create(@Body() body: CreateRoleDTO) {
        console.log(body);
        return this.roleService.Postcreate(body);
    }
    
    @Get(':id')
    read(@Param('id') id:string){
        return this.roleService.read(id);
    }
    
    @Put(':id')
    update(@Param('id')id:number, @Body() role: Partial<Role>){
        return this.roleService.update(id, role);
    }
    
    @Delete(':id')
    destroy(@Param('id') id:number){
        return this.roleService.destroy(id);
    }

  
}
