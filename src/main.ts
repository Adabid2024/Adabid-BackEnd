import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CustomLogger } from './utilities/logger/logger';
import { Logger, ValidationPipe } from '@nestjs/common';
import compression from 'compression';
import bodyParser from 'body-parser';
// 
async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule, {
      logger: new CustomLogger()
    });

    app.useGlobalPipes(new ValidationPipe());
    app.enableCors();
    app.use(compression());
    app.use(bodyParser.json({ limit: '500mb' }));
    app.use(bodyParser.urlencoded({
      limit: '500mb',
      extended: true,
      parameterLimit: 50000,
    })),

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
