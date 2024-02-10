import { Module } from '@nestjs/common';
import { CreateUserController } from './create-user.controller';
import { CreateUserService } from './create-user.service';

@Module({
  imports: [],
  controllers: [CreateUserController],
  providers: [CreateUserService],
})
export class CreateUserModule {}
