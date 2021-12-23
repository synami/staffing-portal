import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { UsersModule } from './modules/users/users.module';
import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose';
import { MongoConfigModule, MongoConfigService } from './core/config/mongo';
import { AppConfigModule } from './core/config/app';

@Module({
  imports: [
    AppConfigModule,
    MongooseModule.forRootAsync({
      imports: [MongoConfigModule],
      inject: [MongoConfigService],
      useFactory: async (mongoConfigService: MongoConfigService) => {
        const options: MongooseModuleOptions = {
          useNewUrlParser: true,
          uri: mongoConfigService.conn,
        };
        return options;
      },
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      playground: true,
      debug: false,
      cors: true,
      introspection: true,
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
