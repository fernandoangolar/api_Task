/* eslint-disable prettier/prettier */

import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator"

export class UpdateUserDto {

    @IsString()
    @IsNotEmpty( { message: 'O nome não pode estar vazio' } )
    name: string

    @IsEmail( {}, { message: 'E-mail inválido' } )
    email: string

    @IsString()
    @MinLength(6, { message: 'A senha deve ter no minimo 6 carazteres' })
    password: string
}