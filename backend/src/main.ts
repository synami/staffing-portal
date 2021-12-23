import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as compression from 'compression';
import * as rateLimit from 'express-rate-limit';
import * as helmet from 'helmet';
import { AppConfigService } from './core/config/app';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(compression());
  const appConfigService = app.get(AppConfigService);
  const { host, port } = appConfigService;
  app.use(
    '/auth/',
    rateLimit({
      windowMs: 60 * 1000,
      max: 3,
      message: {
        message: 'To many requests',
      },
    }),
  );
  app.use(
    helmet({
      contentSecurityPolicy:
        appConfigService.env === 'production' ? undefined : false,
    }),
  );

  await app.listen(port, host);
}
bootstrap();
