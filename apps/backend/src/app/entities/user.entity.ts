import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Gender } from '@family-dashboard/app-constants';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({
    unique: true,
    type: 'varchar',
    length: 255,
  })
  public email: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  public password: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  public firstName: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  public lastName: string;

  @Column({
    type: 'boolean',
  })
  public isVerified: boolean;

  @Column({
    type: 'varchar',
    length: 255,
  })
  birthDate: string;

  @Column({
    type: 'varchar',
    length: 64,
    enum: Gender,
  })
  gender: string;

  @CreateDateColumn({
    type: 'timestamp',
  })
  createdAt: string;

  @UpdateDateColumn({
    type: 'timestamp',
  })
  updatedAt: string;
}
