<<<<<<< HEAD
import { BaseEntity, BeforeInsert, BeforeUpdate, Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, TableInheritance } from "typeorm";
import * as argon2 from 'argon2'
import { Annonce } from "src/annonce/entities/annonce.entity";
import { Message } from "src/message/entities/message.entity";
import { join } from "node:path";


=======
import { BaseEntity, BeforeInsert, BeforeUpdate, Column, Entity, OneToMany, PrimaryGeneratedColumn, TableInheritance } from "typeorm";
import * as argon2 from 'argon2'
import { Notification } from "src/notification/entities/notification.entity";
import { refreshTokenStrategy } from "src/auth/stratigies/refreshToken.stratigy";
>>>>>>> hamed/feature-auth-hamed

@Entity("user")
@TableInheritance({column:{type:"varchar", name:"role"}})


export class User extends BaseEntity {
@PrimaryGeneratedColumn()

id:number
@Column({type:"varchar", nullable:true})
refreshToken:string



@Column({type:"varchar",nullable:true})
refreshToken:string |  null





@Column()
fullname:string
@Column({unique:true   })
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
<<<<<<< HEAD


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
=======
@OneToMany(() => Notification, notification => notification.user,{
    cascade:true,
})
notifications: Notification[];
}
>>>>>>> hamed/feature-auth-hamed
