import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({  
    origin: 'http://localhost:64903', // Allow only this origin  
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allow these HTTP methods  
    allowedHeaders: 'Content-Type, Accept, Authorization', // Allow these headers  
    credentials: true, // Allow cookies to be sent  
  });  
  await app.listen(3000);
}
bootstrap();
