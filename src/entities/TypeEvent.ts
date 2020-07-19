import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Event } from "./Event";

@Entity("type_event", { schema: "eventos" })
export class TypeEvent {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", length: 255 })
  name: string;

  @Column("varchar", { name: "state", length: 255 })
  state: string;

  @OneToMany(() => Event, (event) => event.fkType)
  events: Event[];
}
