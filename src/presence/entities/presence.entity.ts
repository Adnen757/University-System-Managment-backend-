import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
export enum presenceType{
    PRESENT="PRESENT",
    ABSENT="ABSENT",
    RETARD="RETARD",
    JUSTIFIE="JUSTIFIE",    
    
}
export enum methodeType{
    MANUEL="MANUEL",
    EMPREINTE="EMPREINTE",
    FACIAL="FACIAL",
       
    
}
@Entity("Presence")
export class Presence {


    @PrimaryGeneratedColumn()
     id:number

@Column({type:"enum", enum:presenceType})
     statut: presenceType;

@Column({type:"enum", enum:methodeType})
     methode: methodeType;

@Column()
     heureArrivee: string;
}
