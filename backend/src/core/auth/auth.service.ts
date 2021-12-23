import { Injectable } from '@nestjs/common';
import { LoginInput } from './dto/login.input';

@Injectable()
export class AuthService {
  create(createAuthInput: LoginInput) {
    return 'This action adds a new auth';
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
