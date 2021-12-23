import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import {Types} from "mongoose";

@Injectable()
export class UsersService {
  create(createUserInput: CreateUserInput) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: Types.ObjectId) {
    return `This action returns a #${id} user`;
  }

  update(id: Types.ObjectId, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: Types.ObjectId) {
    return `This action removes a #${id} user`;
  }
}
