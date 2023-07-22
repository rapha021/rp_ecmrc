import { Exclude } from "class-transformer";
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Sale } from "./sale.entity";
@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ length: 256 })
  name: string;

  @Column({ length: 256, name: "last_name" })
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column()
  @Exclude()
  password: string;

  @Column({ default: false, name: "is_admin" })
  isAdmin: boolean;

  @Column()
  type: "individual" | "business";

  @Column({ length: 11 })
  number: string;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @DeleteDateColumn({ name: "deleted_at" })
  deletedAt: Date;

  @OneToMany((type) => Sale, (sales) => sales.user, { eager: true })
  orders: Sale[];
}

@Entity("individuals")
export class Individual {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ length: 11 })
  cpf: string;

  @Column({ nullable: false })
  birthdate: Date;

  @Column()
  gender: "Masculino" | "Feminino" | "Outros";

  @OneToOne((type) => User, (users) => users)
  @JoinColumn()
  user: User;
}

@Entity("businesses")
export class Business {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ length: 14 })
  cnpj: string;

  @Column({ name: "business_name" })
  businessName: string;

  @Column({ name: "state_registration"})
  stateRegistration: string;

  @OneToOne((type) => User, (users) => users)
  @JoinColumn()
  user: User;
}
