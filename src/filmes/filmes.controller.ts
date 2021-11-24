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
  import { CreateFilmeDto } from './dto/create-filme.dto';
  import { FilmesService } from './filmes.service';
  import { Filme } from '.prisma/client';
  
  @Controller('filmes')
  export class FilmesController {
    constructor(private filmesService: FilmesService) {}
  
    @Post()
    @UsePipes(ValidationPipe)
    async create(@Body() createFilme: CreateFilmeDto): Promise<Filme> {
      return this.filmesService.create(createFilme);
    }
  
    @Get()
    @UsePipes(ValidationPipe)
    async findMany(): Promise<Filme[]> {
      return this.filmesService.findAll();
    }
  
    @Get('/:id')
    @UsePipes(ValidationPipe)
    async findUnique(@Param('id', ParseIntPipe) id: number): Promise<Filme> {
      return this.filmesService.findOne(id);
    }
  
    @Put('/:id')
    @UsePipes(ValidationPipe)
    async update(
      @Param('id', ParseIntPipe) id: number,
      @Body() updateFilme: CreateFilmeDto,
    ): Promise<Filme> {
      return this.filmesService.update(id, updateFilme);
    }
  
    @Delete('/:id')
    @UsePipes(ValidationPipe)
    async delete(@Param('id') id: string) {
      return this.filmesService.deleteOne({ id: Number(id) });
    }
  
    @Delete('/delete/tudo')
    @UsePipes(ValidationPipe)
    async deleteMany() {
      return this.filmesService.deleteAll();
    }
  }