import { ObjectType, Field, registerEnumType } from '@nestjs/graphql';
import { Prop, Schema } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { IsEnum } from 'class-validator';

export enum UserRole {
  ADMIN = 0,
  USER = 1,
}

registerEnumType(UserRole, {
  name: 'UserRole',
});

@Schema()
@ObjectType()
export class User {
  @Field(() => String)
  _id: Types.ObjectId;

  @Field(() => String, { nullable: false })
  @Prop({ unique: true })
  name: string;

  @Field(() => String, { nullable: false })
  @Prop({ unique: true })
  password: string;

  @Field(() => UserRole, { nullable: false, defaultValue: [UserRole.USER] })
  @Prop({ default: [UserRole.USER] })
  @IsEnum(UserRole)
  roles: UserRole[];

  @Field({ defaultValue: Date.now() })
  @Prop({ default: Date.now() })
  createDateUTC: Date;

  @Field({ nullable: true })
  @Prop()
  updateDateUTC: Date;
}
