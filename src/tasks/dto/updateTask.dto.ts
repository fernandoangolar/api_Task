/* eslint-disable prettier/prettier */

import  { IsEnum } from 'class-validator'
import { TasksStatus } from '../enum/tasksStatus.enum'
import { PriorityStatus } from '../enum/priorityStatus.enum'

export class UpdateTaskDto {

    title: string

    description: string

    @IsEnum(TasksStatus)
    status: TasksStatus

    @IsEnum(PriorityStatus)
    priority: PriorityStatus

    dueDate: string
}