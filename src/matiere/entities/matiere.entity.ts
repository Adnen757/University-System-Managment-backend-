import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Matiere")
export class Matiere {
@PrimaryGeneratedColumn()
     id:number

@Column()
     code:string

@Column()
     intitule:string

@Column()
     coefficient:number

@Column()
     creditsECTS:number

}
