import { Module } from '@nestjs/common';
import { UserRoutesModule } from './use-modules/User/user-routes.module';

@Module({
  imports: [UserRoutesModule],
  controllers: [],
  providers: [],
})
export class RoutesModule {}
