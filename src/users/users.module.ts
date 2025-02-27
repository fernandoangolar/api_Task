/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersEntity } from "./users.entity";
import { UserController } from "./users.controller";
import { UserService } from "./users.service";



@Module( {
    imports: [TypeOrmModule.forFeature([UsersEntity])],
    controllers: [UserController],
    providers: [UserService]
} )
export class UserModule {}