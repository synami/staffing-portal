import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongoConfigService } from './config.service';
import configuration from './configuration';
import validationSchema from './validation.schema';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:
        process.env.NODE_ENV.trim() === 'production'
          ? '.production.env'
          : '.development.env',
      load: [configuration],
      validationSchema: validationSchema(),
      expandVariables: true,
    }),
  ],
  providers: [ConfigService, MongoConfigService],
  exports: [ConfigService, MongoConfigService],
})
export class MongoConfigModule {}
