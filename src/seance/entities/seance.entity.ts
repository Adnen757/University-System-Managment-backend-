import { join } from "path";
import { Salle } from "src/salle/entities/salle.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

export enum SeanceType{
    TD="TD",
    TP="TP",
    COURS="COURS",
    EXAMEN="EXAMEN",    
    RATTRAPAGE="RATTRAPAGE",
}

@Entity("Seance")
export class Seance {

@PrimaryGeneratedColumn()
 id:number
 @Column({
    type:"enum",
    enum:SeanceType
 })
 type:SeanceType

 @Column()
    date:Date
 @Column()
 heureDebut:string
 @Column()   
    heureFin:string
 @Column()
 groupe:string
 

@ManyToOne(() => Salle, salle => salle.seances,{
     nullable:false,
     onDelete:'CASCADE' 
})
@JoinColumn({name:"salle_id"})
salle: Salle; 
}
