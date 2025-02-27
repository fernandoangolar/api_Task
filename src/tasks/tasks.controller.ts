/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from "@nestjs/common";
import { TaskService } from "./tasks.service";
import { TaskEntity } from "./tasks.entity";

@Controller('tasks')
export class TaskController {

    constructor(
        private taskService: TaskService
    ) {}

    @Post()
    async createTask( @Body() data: TaskEntity) {

        const taskSave = await this.taskService.createTask(data)

        return {
            mensagem: 'Task criado com sucesso.',
            task: taskSave,
        }
    }

    @Get()
    public getAll() {
        return {
            mensagem: 'Task.'
        }
    }

}