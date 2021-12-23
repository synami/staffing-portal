import { ObjectType, Field, registerEnumType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { IsEnum } from 'class-validator';

export enum UserRoleEnum {
  ADMIN,
  USER,
}

registerEnumType(UserRoleEnum, {
  name: 'UserRoleEnum',
});

export type UserDocument = Document & User;

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

  @Field(() => UserRoleEnum, {
    nullable: true,
    defaultValue: [UserRoleEnum.USER],
  })
  @Prop({ default: [UserRoleEnum.USER] })
  @IsEnum(UserRoleEnum)
  roles?: UserRoleEnum[];

  @Field({ defaultValue: Date.now() })
  @Prop({ default: Date.now() })
  createDateUTC: Date;

  @Field({ nullable: true })
  @Prop()
  updateDateUTC: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
