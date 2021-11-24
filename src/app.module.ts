import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FilmesModule } from './filmes/filmes.module';
import { UsersModule } from './users/users.module';
import { GenerosModule } from './genero/generos.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [FilmesModule, UsersModule, GenerosModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}