import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param } from '@nestjs/common';
import { CreateServicesDTO } from "./dto/services.dto";
import { ServicesService } from "./services.service";
import { Service } from 'src/entities/Service';

@Controller('service')
export class ServicesController {

    constructor(private readonly servicesService: ServicesService) { }

    @Get()
    findAll(): Promise<Service[]> {
        return this.servicesService.findAll();
    }

    @Post('create')
    create(@Body() body: CreateServicesDTO) {
        console.log(body);
        return this.servicesService.Postcreate(body);
    }
    
    @Get(':id')
    read(@Param('id') id:string){
        return this.servicesService.read(id);
    }
    
    @Put(':id')
    update(@Param('id')id:number, @Body() service: Partial<Service>){
        return this.servicesService.update(id, service);
    }
    
    @Delete(':id')
    destroy(@Param('id') id:number){
        return this.servicesService.destroy(id);
    }

  
}
