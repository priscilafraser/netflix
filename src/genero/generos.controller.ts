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
import { CreateGeneroDto } from './dto/create-genero.dto';
import { GenerosService } from './generos.service';
import { Genero } from '.prisma/client';

@Controller('generos')
export class GenerosController {
  constructor(private generosService: GenerosService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async create(@Body() createGeneroDto: CreateGeneroDto): Promise<Genero> {
    return this.generosService.create(createGeneroDto);
  }

  @Get()
  @UsePipes(ValidationPipe)
  async findMany(): Promise<Genero[]> {
    return this.generosService.findAll();
  }

  @Get('/:id')
  @UsePipes(ValidationPipe)
  async findUnique(@Param('id', ParseIntPipe) id: number): Promise<Genero> {
    return this.generosService.findOne(id);
  }

  @Put('/:id')
  @UsePipes(ValidationPipe)
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateGenero: CreateGeneroDto,
  ): Promise<Genero> {
    return this.generosService.update(id, updateGenero);
  }

  @Delete('/:id')
  @UsePipes(ValidationPipe)
  async delete(@Param('id') id: string) {
    return this.generosService.deleteOne({ id: Number(id) });
  }

  @Delete('/delete/tudo')
  @UsePipes(ValidationPipe)
  async deleteMany() {
    return this.generosService.deleteAll();
  }
}