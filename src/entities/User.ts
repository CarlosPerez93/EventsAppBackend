import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Event } from "./Event";
import { Role } from "./Role";
import { Profile } from "./Profile";

@Entity("user", { schema: "eventos" })
export class User {

  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "username", length: 255 })
  username: string;

  @Column("varchar", { name: "email", length: 255 })
  email: string;

  @Column("varchar", { name: "password", length: 255 })
  password: string;

  @Column("varchar", { name: "state", length: 255, default: () => "'ACTIVE'" })
  state: string;

  @OneToMany(() => Event, (event) => event.fkUser)
  events: Event[];

  @ManyToOne(() => Role, (role) => role.users, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "fk_role", referencedColumnName: "id" }])
  fkRole: Role;

  @OneToOne(() => Profile, (profile) => profile.user, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "fk_profile", referencedColumnName: "id" }])
  fkProfile: Profile;
}
