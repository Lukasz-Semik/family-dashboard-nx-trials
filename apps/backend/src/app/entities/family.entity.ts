import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Family {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({
    unique: true,
    type: 'varchar',
    length: 255,
  })
  public name: string;

  @OneToMany(type => User, user => user.family)
  users: User[];

  @CreateDateColumn({
    type: 'timestamp',
  })
  createdAt: string;

  @UpdateDateColumn({
    type: 'timestamp',
  })
  updatedAt: string;
}
