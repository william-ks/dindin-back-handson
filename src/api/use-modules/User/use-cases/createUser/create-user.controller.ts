import { Controller, Get } from '@nestjs/common';
import { CreateUserService } from './create-user.service';

@Controller()
export class CreateUserController {
  constructor(private createUserService: CreateUserService) {}

  @Get('/user')
  create() {
    console.log('here');
    return this.createUserService.create();
  }
}
