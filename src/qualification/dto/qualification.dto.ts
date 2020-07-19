import { IsInt, IsNotEmpty, Length, IsPositive, IsNumber } from 'class-validator';

export class CreateQualificationDTO {
 
    @Length(5, 100)
    description: string;
    @Length(5, 100)
    state: string;
}