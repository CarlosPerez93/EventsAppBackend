import { IsInt, IsNotEmpty, Length, IsPositive, IsNumber } from 'class-validator';

export class CreateProductDTO {
 
    @Length(5, 100)
    name: string;
    @Length(5, 100)
    state: string;
    @Length(5, 100)
    fkProfile: string;
}