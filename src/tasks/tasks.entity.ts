/* eslint-disable prettier/prettier */

import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity( { name: 'tasks' } )
export class TaskEntity {

    @PrimaryGeneratedColumn( 'uuid' )
    id: string

    @Column( {name: 'title', length: 50, nullable: false} )
    title: string

    @Column( {name: 'description', length: 255, nullable: false} )
    description: string

    @Column( { name: 'dueDate', nullable: false } )
    dueDate: string

    @CreateDateColumn ( { name: 'createdAt' } )
    createdAt: string

    @UpdateDateColumn ( { name: 'updatedAt' } )
    updatedAt: string
}