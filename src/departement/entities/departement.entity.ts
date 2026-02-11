import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Departement")
export class Departement {
@PrimaryGeneratedColumn()
id:number

@Column()
code:string

@Column()
nom:string

@Column()
description:string


    
}
