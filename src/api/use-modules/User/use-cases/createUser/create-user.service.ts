import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';

@Injectable()
export class CreateUserService {
  async create() {
    const user = {
      id: randomUUID(),
      name: 'John Doe',
      email: 'john.doe@gmail.com',
      password: '$2a$12$seJr2Ezu7Lc0QU7IsmwgNu3XaAhTf2XUa4nqlEP9eQVVnVxm7nXSC',
    };

    return user;
  }
}
