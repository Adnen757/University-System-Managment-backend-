import { User } from "src/user/entities/user.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
@Entity("annonce")
export class Annonce {
@PrimaryGeneratedColumn()
 id:number

@Column()
 title:string
@Column()
 contenu:string 
@Column()
 datePublication:string
@Column()
 cibleRole:string
@Column()
 cibleDepartement:string


@OneToMany(()=>User,(user)=>user.annonces)
users:User[]
}
