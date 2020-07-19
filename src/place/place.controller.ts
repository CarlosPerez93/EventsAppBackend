import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param } from '@nestjs/common';
import { CreatePlacetDTO } from "./dto/place.dto";
import { PlaceService } from "./place.service";
import { Place } from 'src/entities/Place';


@Controller('product')
export class PlaceController {

    constructor(private readonly placeService: PlaceService) { }

    @Get()
    findAll(): Promise<Place[]> {
        return this.placeService.findAll();
    }

    @Post('create')
    create(@Body() body: CreatePlacetDTO) {
        console.log(body);
        return this.placeService.Postcreate(body);
    }
    
    @Get(':id')
    read(@Param('id') id:string){
        return this.placeService.read(id);
    }
    
    @Put(':id')
    update(@Param('id')id:number, @Body() place: Partial<Place>){
        return this.placeService.update(id, place);
    }
    
    @Delete(':id')
    destroy(@Param('id') id:number){
        return this.placeService.destroy(id);
    }

  
}
