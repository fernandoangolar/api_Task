/* eslint-disable prettier/prettier */
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { TaskEntity } from "./tasks.entity";
import { Injectable } from "@nestjs/common";

@Injectable()
export class TaskService {

    constructor( 
        @InjectRepository(TaskEntity) private taskRespositoty: Repository<TaskEntity> 
    ) {}

    async createTask(data: TaskEntity) {
        const task = this.taskRespositoty.save(data)
        return task
    }

}