import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn'],
  });

  const configService: ConfigService = app.get(ConfigService);

  app.setGlobalPrefix('/api/v1');
  const PORT = configService.get('port');
  await app.listen(PORT);
  console.log(`Server started at port : ${PORT}`);
}
bootstrap();
