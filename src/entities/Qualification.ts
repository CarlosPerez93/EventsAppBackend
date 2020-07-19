import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Profile } from "./Profile";

@Entity("qualification", { schema: "eventos" })
export class Qualification {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "description", length: 255 })
  description: string;

  @Column("varchar", { name: "state", length: 255 })
  state: string;

  @OneToMany(() => Profile, (profile) => profile.fkQualification)
  profiles: Profile[];
}
