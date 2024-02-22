import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

const cookieSession = require('cookie-session');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Used cars API')
    .setDescription('Used car reports such as sold price, mileage, and much more.')
    .setVersion('1.0')
    .addTag('APIs')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.use(
    cookieSession({
    keys : ['ygfygcfd'],  
  }),
  )
  app.useGlobalPipes(new ValidationPipe({whitelist: true}))
  await app.listen(3000);
}
bootstrap();

