/* eslint-disable prettier/prettier */
import { Controller, Get } from "@nestjs/common";
import { UserService } from "./users.service";


@Controller('users')
export class UserController {

    constructor(
        private userService: UserService
    ) {}

    @Get()
    public getAll() {

        return {
            mensagem: 'User, OIOIOIO'
        }
    }

}