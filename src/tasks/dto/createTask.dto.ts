/* eslint-disable prettier/prettier */

import { IsNotEmpty, IsString } from "class-validator"


export class CreateTaskDto {

    @IsString()
    @IsNotEmpty( { message: 'O titulo não pode está vázio' } )
    title: string

    @IsString()
    @IsNotEmpty( { message: 'A descrição não pode ser vázia' } )
    description: string
}