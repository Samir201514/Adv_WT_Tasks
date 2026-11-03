import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Faculties {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  expertise: string;

  @Column({type: "int"})
  noOfPublication: number;
}