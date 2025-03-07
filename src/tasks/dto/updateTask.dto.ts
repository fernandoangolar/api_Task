/* eslint-disable prettier/prettier */

import  { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator'
import { TasksStatus } from '../enum/tasksStatus.enum'
import { PriorityStatus } from '../enum/priorityStatus.enum'

export class UpdateTaskDto {

    @IsOptional()
    @IsString()
    @IsNotEmpty( { message: 'O titulo não pode está vázio' } )
    title: string

    @IsOptional()
    @IsString()
    @IsNotEmpty( { message: 'A descrição não pode ser vázia' } )
    description: string

    @IsOptional()
    @IsEnum(TasksStatus)
    status: TasksStatus

    @IsOptional()
    @IsEnum(PriorityStatus)
    priority: PriorityStatus

    @IsOptional()
    dueDate: string
}