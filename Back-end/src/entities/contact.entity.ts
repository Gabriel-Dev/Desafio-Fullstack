import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne } from 'typeorm';
import { Client } from './client.entity';

@Entity('contacts')
export class Contact {

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ length: 150 })
    name: string

    @Column({ length: 150, unique: true})
    email: string

    @Column({ length: 20})
    tel: string

    @CreateDateColumn({type: 'date'})
    created_at: string 

    @ManyToOne(()=> Client)
    client: Client

}