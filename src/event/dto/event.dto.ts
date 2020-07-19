import { IsInt, IsNotEmpty, Length, IsPositive, IsNumber } from 'class-validator';

export class CreateEventtDTO {
 
    @Length(5, 100)
    description: string;
    @Length(5, 100)
    participants: string;
    @Length(5, 100)
    startDate: string;
    @Length(5, 100)
    duration: string;
    @Length(5, 100)
    fkType: string;
    @Length(5, 100)
    fkUser: string;
}