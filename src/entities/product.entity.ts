import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { SaleProducts } from "./sale.entity";

@Entity("products")
export class Product {
  @PrimaryGeneratedColumn("increment")
  readonly id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @DeleteDateColumn({ name: "deleted_at" })
  deletedAt: Date;

  @OneToMany((type) => SaleProducts, (sales) => sales.product)
  sales: Array<SaleProducts>;

  @ManyToMany((type) => Tag, (tags) => tags.products, { eager: true })
  @JoinTable()
  tags: Array<Tag>;
}

@Entity("tags")
export class Tag {
  @PrimaryGeneratedColumn("increment")
  readonly id: number;

  @Column({ unique: true })
  name: string;

  @ManyToMany((type) => Product, (products) => products.tags)
  products: Array<Product>;
}
