import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity("role", { schema: "eventos" })
export class Role {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", length: 255 })
  name: string;

  @Column("varchar", { name: "state", length: 255, default: () => "'ACTIVE'" })
  state: string;

  @OneToMany(() => User, (user) => user.fkRole)
  users: User[];
}
