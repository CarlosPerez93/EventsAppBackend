import { IsInt, IsNotEmpty, Length, IsPositive, IsNumber } from 'class-validator';

export class CreateProfileDTO {
   
    @Length(5, 100)
    firstName: string;
    @Length(5, 100)
    secondName: string;
    @Length(5, 100)
    firstSirname: string;
    @Length(5, 100)
    secondSurname: string;
    @Length(5, 100)
    fkService: string;
    @Length(5, 100)
    fkQualification: string;

}