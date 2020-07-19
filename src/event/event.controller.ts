import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param } from '@nestjs/common';
import { CreateEventtDTO } from "./dto/event.dto";
import { EventService } from "./event.service";
import { Event } from 'src/entities/Event';


@Controller('event')
export class EventController {

    constructor(private readonly eventService: EventService) { }

    @Get()
    findAll(): Promise<Event[]> {
        return this.eventService.findAll();
    }

    @Post('create')
    create(@Body() body: CreateEventtDTO) {
        console.log(body);
        return this.eventService.Postcreate(body);
    }
    
    @Get(':id')
    read(@Param('id') id:string){
        return this.eventService.read(id);
    }
    
    @Put(':id')
    update(@Param('id')id:number, @Body() event: Partial<Event>){
        return this.eventService.update(id, event);
    }
    
    @Delete(':id')
    destroy(@Param('id') id:number){
        return this.eventService.destroy(id);
    }

  
}
