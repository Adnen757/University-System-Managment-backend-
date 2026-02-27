import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class CreateNoteDto {

@IsNotEmpty()
@IsString()
valeur:string

@IsNotEmpty()
@IsString()
commentaire:string

@IsNotEmpty()
@IsBoolean()
validee:boolean


}
