import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './entities/user.entity';
import * as bcrypt from 'bcryptjs';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: User.name,
        useFactory: () => {
          return UserSchema.pre('save', (next) => {
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            const user: User = this;
            bcrypt.hash(user.password, 10, (err, hash) => {
              if (err) {
                return next(err);
              }
              user.password = hash;
              next();
            });
          });
        },
      },
    ]),
  ],
  providers: [UsersResolver, UsersService],
  exports: [UsersService],
})
export class UsersModule {}
