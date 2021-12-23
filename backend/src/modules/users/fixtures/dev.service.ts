import { Injectable, Logger } from '@nestjs/common';
import { CreateUserInput } from '../dto/create-user.input';
import { UserRoleEnum } from '../entities/user.entity';

@Injectable()
export class UserDevFixtureService {
  constructor(private readonly logger: Logger) {}

  async userFixture(): Promise<CreateUserInput> {
    this.logger.log('Dev fixtures user: starting...');

    const user: CreateUserInput = {
      name: 'Test',
      password: 'Trial',
      roles: [UserRoleEnum.ADMIN],
    };

    this.logger.log('Dev fixtures user: ending...');
    return Promise.resolve(user);
  }
}
