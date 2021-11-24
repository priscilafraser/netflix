import {
  Controller,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
  Get,
  Param,
  ParseIntPipe,
  Put,
  Delete,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';
import { User } from '.prisma/client';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async create(
    @Body() createUser: CreateUserDto,
  ): Promise<User> {
    return this.usersService.create(createUser);
  }

  @Get()
  @UsePipes(ValidationPipe)
  async findMany(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get('/:id')
  @UsePipes(ValidationPipe)
  async findUnique(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<User> {
    return this.usersService.findOne(id);
  }

  @Put('/:id')
  @UsePipes(ValidationPipe)
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUser: CreateUserDto,
  ): Promise<User> {
    return this.usersService.update(id, updateUser);
  }

  @Delete('/:id')
  @UsePipes(ValidationPipe)
  async delete(@Param('id') id: string) {
    return this.usersService.deleteOne({ id: Number(id) });
  }

  @Delete('/delete/tudo')
  @UsePipes(ValidationPipe)
  async deleteMany() {
    return this.usersService.deleteAll();
  }
}