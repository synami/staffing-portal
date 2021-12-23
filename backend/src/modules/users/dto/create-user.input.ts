import { InputType, Field } from '@nestjs/graphql';
import { IsDefined, IsEnum } from 'class-validator';
import { UserRole } from '../entities/user.entity';

@InputType()
export class CreateUserInput {
  @Field(() => String, { nullable: false })
  name: string;

  @Field(() => String, { nullable: false })
  password: string;

  @Field(() => UserRole, { nullable: false, defaultValue: [UserRole.USER] })
  @IsEnum(UserRole)
  @IsDefined()
  roles: UserRole[];
}
