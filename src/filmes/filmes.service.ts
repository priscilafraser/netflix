import { Injectable } from '@nestjs/common';
import { Filme, Prisma } from '.prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFilmeDto } from './dto/create-filme.dto';

@Injectable()
export class FilmesService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateFilmeDto) {
    const generos = data.generos?.map((genero) => ({
      id: genero,
    }));
    const participantes = data.users?.map((participante) => ({
      id: participante,
    }));
    return this.prisma.filme.create({
      data: {
        ...data,
        generos: {
          connect: generos,
        },
        participantes: {
          connect: participantes,
        },
      },
      include: {
        generos: true,
        participantes: true,
      },
    });
  }

  async findAll(): Promise<Filme[]> {
    return this.prisma.filme.findMany();
  }

  async findOne(id: number): Promise<Filme> {
    return this.prisma.filme.findUnique({
      where: {
        id: id,
      },
      include: {
        generos: true,
        participantes: true,
      },
    });
  }

  async update(id: number, data: CreateFilmeDto) {
    const generos = data.generos?.map((genero) => ({
      id: genero,
    }));
    const participantes = data.users?.map((participante) => ({
      id: participante,
    }));
    return await this.prisma.filme.update({
      data: {
        ...data,
        generos: {
          connect: generos,
        },
        participantes: {
          connect: participantes,
        },
      },
      include: {
        generos: true,
        participantes: true,
      },
      where: { id },
    });
  }

  async deleteOne(where: Prisma.FilmeWhereUniqueInput): Promise<Filme> {
    return this.prisma.filme.delete({ where });
  }

  async deleteAll() {
    return this.prisma.filme.deleteMany();
  }
}