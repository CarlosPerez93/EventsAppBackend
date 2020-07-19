import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param } from '@nestjs/common';
import { CreateProductDTO } from "./dto/product.dto";
import { ProductService } from "./product.service";
import { Product } from 'src/entities/Product';


@Controller('product')
export class ProductController {

    constructor(private readonly productService: ProductService) { }

    @Get()
    findAll(): Promise<Product[]> {
        return this.productService.findAll();
    }

    @Post('create')
    create(@Body() body: CreateProductDTO) {
        console.log(body);
        return this.productService.Postcreate(body);
    }
    
    @Get(':id')
    read(@Param('id') id:string){
        return this.productService.read(id);
    }
    
    @Put(':id')
    update(@Param('id')id:number, @Body() product: Partial<Product>){
        return this.productService.update(id, product);
    }
    
    @Delete(':id')
    destroy(@Param('id') id:number){
        return this.productService.destroy(id);
    }

  
}
