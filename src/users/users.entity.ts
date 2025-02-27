/* eslint-disable prettier/prettier */

import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity( {name: 'users'} )
export class UsersEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column( {name: 'name', length: 50, nullable: false} )
    name: string

    @Column( {name: 'email', length: '50', nullable: false} )
    email: string

    @Column( {name: 'password', length: 255, nullable: false} )
    password: string

    @CreateDateColumn( { name: 'createdAt' } )
    createdAt: string
    
    @UpdateDateColumn( { name: 'updatedAt' } )
    updatedAt: string
}