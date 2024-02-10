import { Module } from '@nestjs/common';
import { CreateUserModule } from './use-cases/createUser/create-user.module';

@Module({
  imports: [CreateUserModule],
  controllers: [],
  providers: [],
})
export class UserRoutesModule {}
