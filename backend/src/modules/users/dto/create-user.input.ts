import { InputType, Field } from '@nestjs/graphql';
import { IsDefined, IsEnum, IsOptional } from 'class-validator';
import { UserRoleEnum } from '../entities/user.entity';

@InputType()
export class CreateUserInput {
  @Field(() => String, { nullable: false })
  name: string;

  @Field(() => String, { nullable: false })
  password: string;

  @Field(() => UserRoleEnum, { nullable: true })
  @IsEnum(UserRoleEnum)
  @IsOptional()
  roles?: UserRoleEnum[];
}
