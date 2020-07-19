import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param } from '@nestjs/common';
import { CreateQualificationDTO } from "./dto/qualification.dto";
import { QualificationService } from "./qualification.service";
import { Qualification } from 'src/entities/Qualification';

@Controller('qualification')
export class QualificationController {

    constructor(private readonly qualificationService: QualificationService) { }

    @Get()
    findAll(): Promise<Qualification[]> {
        return this.qualificationService.findAll();
    }

    @Post('create')
    create(@Body() body: CreateQualificationDTO) {
        console.log(body);
        return this.qualificationService.Postcreate(body);
    }
    
    @Get(':id')
    read(@Param('id') id:string){
        return this.qualificationService.read(id);
    }
    
    @Put(':id')
    update(@Param('id')id:number, @Body() qualification: Partial<Qualification>){
        return this.qualificationService.update(id, qualification);
    }
    
    @Delete(':id')
    destroy(@Param('id') id:number){
        return this.qualificationService.destroy(id);
    }

  
}
