import { Note } from "src/note/entities/note.entity"
import { Presence } from "src/presence/entities/presence.entity"
import { User } from "src/user/entities/user.entity"
import { ChildEntity, Column, OneToMany, PrimaryGeneratedColumn } from "typeorm"
@ChildEntity("Etudiant")

export class Etudiant extends User {
    @PrimaryGeneratedColumn()
    id: number


    @Column()
    matricule: string

    @Column()
    niveau: string




    @OneToMany(() => Presence, (presence) => presence.etudiant, { cascade: true })
    presences: Presence[]

}
