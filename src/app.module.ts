/* eslint-disable prettier/prettier */


import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule } from "@nestjs/config"
import { postgresConfigService } from './config/postrgres.config.service';
import { TaskModule } from './tasks/tasks.module';
import { UserModule } from './users/users.module';


@Module({
    imports: [
      TaskModule,
      UserModule,
      ConfigModule.forRoot({
        isGlobal: true
      }),
      TypeOrmModule.forRootAsync({
        useClass: postgresConfigService,
        inject: [postgresConfigService]
      })
    ],

})
export class AppModule {}
