import { Injectable } from '@nestjs/common';
import { User, Prisma } from '.prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dtos/create-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateUserDto) {
    const filmes = data.filmes?.map((filme) => ({
      id: filme,
    }));
    return this.prisma.user.create({
      data: {
        ...data,
        filmes: {
          connect: filmes,
        },
      },
      include: {
        filmes: true,
      },
    });
  }

  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async findOne(userId: number): Promise<User> {
    return this.prisma.user.findUnique({
      where: {
        id: userId,
      },
      include: {
        filmes: true,
      },
    });
  }

  async update(id: number, data: CreateUserDto) {
    const filmes = data.filmes?.map((filme) => ({
      id: filme,
    }));

    return await this.prisma.user.update({
      data: {
        ...data,
        filmes: {
          connect: filmes,
        },
      },
      where: { id },
    });
  }

  async deleteOne(
    where: Prisma.UserWhereUniqueInput,
  ): Promise<User> {
    return this.prisma.user.delete({ where });
  }

  async deleteAll() {
    return this.prisma.user.deleteMany();
  }
}