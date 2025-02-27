/* eslint-disable prettier/prettier */

import { Module } from "@nestjs/common";
import { TaskController } from "./tasks.controller";
import { TaskService } from "./tasks.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TaskEntity } from "./tasks.entity";

@Module( {
    imports: [TypeOrmModule.forFeature([TaskEntity])],
    controllers: [TaskController],
    providers: [TaskService]
})
export class TaskModule {}