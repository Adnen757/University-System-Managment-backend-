import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateMatiereDto {




    @IsNotEmpty()
    @IsString()
    code:string

    @IsNotEmpty()
    @IsString()
    intitule:string
   @IsNotEmpty()
    @IsNumber()
    coefficient:number

     @IsNotEmpty()
    @IsNumber()
    creditsECTS:number
    
}
