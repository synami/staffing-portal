import { Injectable, Logger } from '@nestjs/common';
import { Command } from 'nestjs-command';
import { UsersService } from '../users.service';
import { UserDevFixtureService } from '../fixtures/dev.service';

// Module do not work with forRootAsync or forFeatureAsync
@Injectable()
export class UserDevSeed {
  constructor(
    private readonly userService: UsersService,
    private readonly userFixtureService: UserDevFixtureService,
  ) {}

  @Command({
    command: 'dev-create:users',
    describe: 'create dev users',
  })
  async create(): Promise<void> {
    console.log('Dev seed user: starting...');

    const userDto = await this.userFixtureService.userFixture();
    await this.userService.create(userDto);

    console.log('Dev seed user: ending...');
    return;
  }
}
