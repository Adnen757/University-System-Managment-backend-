import { Etudiant } from "src/etudiant/entities/etudiant.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("Note")
export class Note {

@PrimaryGeneratedColumn()
 id:number


@Column()
valeur:string
@Column()
commentaire:string
@Column()
validee:boolean


}




