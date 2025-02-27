/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { UsersEntity } from "./users.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(UsersEntity)
        private userRepository: Repository<UsersEntity>) 
    {}
}