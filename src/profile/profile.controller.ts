import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param } from '@nestjs/common';
import { CreateProfileDTO } from "./dto/profile.dto";
import { ProfileService } from "./profile.service";
import { Profile } from 'src/entities/Profile';
import { profile } from 'console';

@Controller('profile')
export class ProfileController {

    constructor(private readonly profileService: ProfileService) { }

    @Get()
    findAll(): Promise<Profile[]> {
        return this.profileService.findAll();
    }

    @Post('create')
    create(@Body() body: CreateProfileDTO) {
        console.log(body);
        return this.profileService.Postcreate(body);
    }
    
    @Get(':id')
    read(@Param('id') id:string){
        return this.profileService.read(id);
    }
    
    @Put(':id')
    update(@Param('id')id:number, @Body() profile: Partial<Profile>){
        return this.profileService.update(id, profile);
    }
    
    @Delete(':id')
    destroy(@Param('id') id:number){
        return this.profileService.destroy(id);
    }

  
}
