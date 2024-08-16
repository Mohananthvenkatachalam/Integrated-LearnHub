import { Table, Model, Column, DataType } from 'sequelize-typescript';
import { UserRole, userSchema } from '../schema/userSchema';
import { z } from 'zod';

type UserAttributes = z.infer<typeof userSchema>;

@Table({
  timestamps: true,
  tableName: 'users',
  createdAt: 'created_at',
  updatedAt: 'updated_at',
})
export class User extends Model implements UserAttributes {
  //
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  declare id: number;

  // Declared automatically by Sequelize when timestamps: true
  declare created_at: Date;
  declare updated_at: Date;

  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  declare email: string;

  @Column({ type: DataType.STRING, allowNull: false })
  declare hashed_password: string;

  @Column({ type: DataType.STRING, allowNull: false })
  declare role: UserRole;

  @Column({ type: DataType.STRING, allowNull: false })
  declare fullname: string;

  @Column({ type: DataType.STRING, allowNull: true })
  declare profile_img: string;

  @Column({ type: DataType.STRING, allowNull: true })
  declare phone: string;
}
