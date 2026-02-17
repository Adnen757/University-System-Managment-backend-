import { User } from "src/user/entities/user.entity"
import { ChildEntity, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm"
@ChildEntity("Etudiant")

export class Etudiant extends User{
@PrimaryGeneratedColumn()
 id:number


@Column()
matricule:string

@Column()
niveau:string



}
