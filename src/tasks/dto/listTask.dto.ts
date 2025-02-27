/* eslint-disable prettier/prettier */

import { PriorityStatus } from "../enum/priorityStatus.enum";
import { TasksStatus } from "../enum/tasksStatus.enum";


export class ListTaskDto {

    constructor(readonly id: string,
        readonly title: string,
        readonly description: string,
        readonly status: TasksStatus,
        readonly priority: PriorityStatus,
        readonly dueDate: string) {}
}