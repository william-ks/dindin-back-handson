import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER } from '@nestjs/core';
import { ErrorFilter } from './api/middlewares/HandleErrors';
import { RoutesModule } from './api/routes.module';
import { PrismaGlobalModule } from './config/prisma/prisma-global.module';

@Module({
  imports: [ConfigModule.forRoot(), PrismaGlobalModule, RoutesModule],
  providers: [
    {
      provide: APP_FILTER,
      useClass: ErrorFilter,
    },
  ],
})
export class AppModule {}
