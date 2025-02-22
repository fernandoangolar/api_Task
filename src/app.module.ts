/* eslint-disable prettier/prettier */


import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule } from "@nestjs/config"
import { postgresConfigService } from './config/postrgres.config.service';


@Module({
    imports: [
      ConfigModule.forRoot({
        isGlobal: true
      }),
      TypeOrmModule.forRootAsync({
        useClass: postgresConfigService,
        inject: [postgresConfigService]
      })
    ] 
})
export class AppModule {}
