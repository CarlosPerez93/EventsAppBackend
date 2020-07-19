import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param } from '@nestjs/common';
import { CreateTypeEventDTO } from "./dto/typeEvent.dto";
import { TypeEventService } from "./typeEvent.service";
import { TypeEvent } from 'src/entities/TypeEvent';


@Controller('typeEvent')
export class TypeEventController {

    constructor(private readonly typeEventService: TypeEventService) { }

    @Get()
    findAll(): Promise<TypeEvent[]> {
        return this.typeEventService.findAll();
    }

    @Post('create')
    create(@Body() body: CreateTypeEventDTO) {
        console.log(body);
        return this.typeEventService.Postcreate(body);
    }
    
    @Get(':id')
    readTypeEvent(@Param('id') id:string){
        return this.typeEventService.read(id);
    }
    
    @Put(':id')
    updateTypeEvent(@Param('id')id:number, @Body() typeEvent: Partial<TypeEvent>){
        return this.typeEventService.update(id, typeEvent);
    }
    
    @Delete(':id')
    destroyTypeEvent(@Param('id') id:number){
        return this.typeEventService.destroy(id);
    }

  
}
