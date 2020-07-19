import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("place", { schema: "eventos" })
export class Place {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", length: 255 })
  name: string;

  @Column("varchar", { name: "state", length: 255 })
  state: string;

  @Column("varchar", { name: "ubication", length: 255 })
  ubication: string;
}
