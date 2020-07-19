import { IsInt, IsNotEmpty, Length, IsPositive, IsNumber } from 'class-validator';

export class CreateUserDTO {
 
    @Length(5, 100)
    username: string;
    @Length(5, 100)
    email: string;
    @Length(5, 100)
    password: string;
    @Length(5, 100)
    state: string;
    @Length(5, 100)
    fkRole: string;
    @Length(5, 100)
    fkProfile: string;

}