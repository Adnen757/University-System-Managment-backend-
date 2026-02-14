import { Column, PrimaryGeneratedColumn, Entity } from "typeorm";

export enum NotificationType {
  NOTE = "NOTE",
  ABSENCE = "ABSENCE",
  PLANING = "PLANING",
  ANNONCE = "ANNONCE",
  MESSAGE = "MESSAGE",
}

@Entity()
export class Notification {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titre: string;

  @Column()
  message: string;

  @Column({
    type: "enum",
    enum: NotificationType,
  })

  @Column()
  lu: boolean;
}