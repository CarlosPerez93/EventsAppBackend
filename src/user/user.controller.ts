import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param } from '@nestjs/common';
import { CreateUserDTO } from "./dto/user.dto";
import { UserService } from "./user.service";
import { User } from 'src/entities/User';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) { }

    @Get()
    findAll(): Promise<User[]> {
        return this.userService.findAll();
    }

    @Post('create')
    create(@Body() body: CreateUserDTO) {
        console.log(body);
        return this.userService.Postcreate(body);
    }
    
    @Get(':id')
    readUser(@Param('id') id:string){
        return this.userService.read(id);
    }
    
    @Put(':id')
    updateUser(@Param('id')id:number, @Body() user: Partial<User>){
        return this.userService.update(id, user);
    }
    
    @Delete(':id')
    destroyUser(@Param('id') id:number){
        return this.userService.destroy(id);
    }

  
}
