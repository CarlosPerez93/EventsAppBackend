import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Product } from "./Product";
import { Service } from "./Service";
import { User } from "./User";
import { Qualification } from "./Qualification";

@Entity("profile", { schema: "eventos" })
export class Profile {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "firstName", length: 255 })
  firstName: string;

  @Column("varchar", { name: "secondName", nullable: true, length: 255 })
  secondName: string | null;

  @Column("varchar", { name: "firstSurname", length: 255 })
  firstSurname: string;

  @Column("varchar", { name: "secondSurname", nullable: true, length: 255 })
  secondSurname: string | null;

  @OneToMany(() => Product, (product) => product.fkProfile)
  products: Product[];

  @ManyToOne(() => Service, (service) => service.profiles, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "fk_service", referencedColumnName: "id" }])
  fkService: Service;

  @OneToOne(() => User, (user) => user.fkProfile)
  user: User;

  @ManyToOne(() => Qualification, (qualification) => qualification.profiles, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "fk_qualification", referencedColumnName: "id" }])
  fkQualification: Qualification;
}
