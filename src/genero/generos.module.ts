import { Module } from '@nestjs/common';
import { GenerosService } from './generos.service';
import { GenerosController } from './generos.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [GenerosService],
  controllers: [GenerosController],
  imports: [PrismaModule],
})
export class GenerosModule {}