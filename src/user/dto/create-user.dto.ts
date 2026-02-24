import { IsEmail, IsNotEmpty, IsOptional, IsString, Min } from "class-validator"

export class CreateUserDto {
   @IsString()
   @IsNotEmpty()
    fullname:string

    @IsString()
    @IsOptional()
    refreshToken:string | null



    @IsEmail()
    @IsNotEmpty()
    email:string


  //  @Min(6)
    @IsString()
    password:string

   


}
