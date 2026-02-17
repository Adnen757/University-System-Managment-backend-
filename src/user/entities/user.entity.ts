import { BaseEntity, BeforeInsert, BeforeUpdate, Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, TableInheritance } from "typeorm";
import * as argon2 from 'argon2'
import { Annonce } from "src/annonce/entities/annonce.entity";
import { Message } from "src/message/entities/message.entity";
import { join } from "node:path";



@Entity("user")
@TableInheritance({column:{type:"varchar", name:"role"}})


export class User extends BaseEntity {
@PrimaryGeneratedColumn()
id:number

@Column()
fullname:string
@Column()
email:string
@Column()
password:string
@Column()
role:string

@BeforeInsert()
@BeforeUpdate()
async hashPassword(){
    if(this.password&& ! this.password.startsWith("$argon2")){
        this.password=await argon2.hash(this.password);
    }
}


@ManyToOne(()=>Annonce,anno=>anno.user,{  
nullable:true
})
@JoinColumn({name:"annonceId"})
annonce:Annonce;




@OneToMany(()=>Message,message=>message.user,{
    nullable:true
})
@JoinColumn({name:"message"})
message:Message[]
}
