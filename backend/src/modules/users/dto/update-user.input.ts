import { CreateUserInput } from './create-user.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { Types } from 'mongoose';
import { IsMongoId, IsNotEmpty } from 'class-validator';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field(() => String)
  @IsMongoId()
  @IsNotEmpty()
  _id: Types.ObjectId;
}
