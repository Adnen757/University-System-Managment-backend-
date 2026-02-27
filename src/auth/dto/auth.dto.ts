import { IsOptional, IsString } from "class-validator";

export class AuthDto {
<<<<<<< HEAD
 @IsString()
 @IsOptional()
   email: string;
     @IsString()
     @IsOptional()
  password: string;
=======
    @IsString()
    @IsOptional()
    email: string;
    @IsString()
    @IsOptional()
    password: string;
>>>>>>> hamed/feature-auth-hamed
}