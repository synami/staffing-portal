import { InputType, Field } from '@nestjs/graphql';
import { IsDefined, IsEnum } from 'class-validator';
import { UserRoleEnum } from '../entities/user.entity';

@InputType()
export class CreateUserInput {
  @Field(() => String, { nullable: false })
  name: string;

  @Field(() => String, { nullable: false })
  password: string;

  @Field(() => UserRoleEnum)
  @IsEnum(UserRoleEnum)
  @IsDefined()
  roles: UserRoleEnum[];
}
