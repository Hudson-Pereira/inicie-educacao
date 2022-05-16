import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const PORT = 3000 || process.env.PORT

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT, () => {
    console.log(`Servidor em http://localhost:${PORT}.`)
  });
}
bootstrap();
