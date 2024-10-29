import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: console,
  });
  app.enableCors({
    origin: process.env.WEBSITE_URL || 'http://localhost:3000', // Allow only this origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allow these HTTP methods
    allowedHeaders: 'Content-Type, Accept, Authorization', // Allow these headers
    credentials: true, // Allow cookies to be sent
  });

  app.setGlobalPrefix('api');

  await app.listen(3009);
}
bootstrap();
