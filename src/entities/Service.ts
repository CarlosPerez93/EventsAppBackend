import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Profile } from "./Profile";

@Entity("service", { schema: "eventos" })
export class Service {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", length: 255 })
  name: string;

  @Column("varchar", { name: "state", length: 255, default: () => "'ACTIVE'" })
  state: string;

  @OneToMany(() => Profile, (profile) => profile.fkService)
  profiles: Profile[];
}
