import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User";
import { TypeEvent } from "./TypeEvent";

@Entity("event", { schema: "eventos" })
export class Event {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "description", length: 255 })
  description: string;

  @Column("int", { name: "participants" })
  participants: number;

  @Column("int", { name: "startDate" })
  startDate: number;

  @Column("int", { name: "duration" })
  duration: number;

  @ManyToOne(() => User, (user) => user.events, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "fk_user", referencedColumnName: "id" }])
  fkUser: User;

  @ManyToOne(() => TypeEvent, (typeEvent) => typeEvent.events, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "fk_type", referencedColumnName: "id" }])
  fkType: TypeEvent;
}
