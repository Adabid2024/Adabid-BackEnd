import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CustomLogger } from './utilities/logger/logger';
import { Logger, ValidationPipe } from '@nestjs/common';
import compression from 'compression';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule, {
      logger: new CustomLogger()
    });

    app.useGlobalPipes(new ValidationPipe());
    app.enableCors();
    app.use(compression());

    await app.listen(process.env.PORT || 3000);
  } catch (error) {
    Logger.error(`❌ Error in starting server, ${error}`, '', 'Bootstrap');
    process.exit();
  }
}
bootstrap().catch((e) => {
  Logger.error(`❌ Error in starting server, ${e}`, '', 'Bootstrap');
  throw e;
});
