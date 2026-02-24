import { Seance } from "src/seance/entities/seance.entity";
import { User } from "src/user/entities/user.entity";
import { ChildEntity, Column, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@ChildEntity("Professeur")
export class Professeur extends User{
@PrimaryGeneratedColumn()
 id:number
@Column()
ChargeHoraireSemestrielle:string


@OneToOne(() => Seance , seance => seance.professeur,{
    nullable:true,
    onDelete:'SET NULL' 
})
seance: Seance;
}
