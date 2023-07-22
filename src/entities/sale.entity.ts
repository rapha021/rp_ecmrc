import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Product } from "./product.entity";
import { User } from "./user.entity";

@Entity("sales")
export class Sale {
  @PrimaryGeneratedColumn("increment")
  readonly id: string;

  @Column()
  date: Date;

  @Column({ type: "float" })
  total_amount: number;

  @OneToMany((type) => SaleProducts, (saleProducts) => saleProducts.sale, {
    eager: true,
  })
  saleProducts: Array<SaleProducts>;

  @ManyToOne((type) => User, (users) => users.orders)
  @JoinColumn({ name: "user_id" })
  user: User;
}

@Entity("sale_products")
export class SaleProducts {
  @PrimaryGeneratedColumn("increment")
  readonly id: string;

  @Column()
  quantity: number;

  @Column()
  price: number;

  @ManyToOne(() => Sale, (sale) => sale)
  @JoinColumn({ name: "sale_id" })
  sale: Sale;

  @ManyToOne((type) => Product, (products) => products, { eager: true })
  @JoinColumn({ name: "product_id" })
  product: Product;
}
