import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  nome: string;

  @IsOptional()
  imagem: string;

  @IsNotEmpty()
  data_nascimento: string;

  @IsNotEmpty()
  staff: boolean;

  @IsNotEmpty()
  ator: boolean;

  @IsOptional()
  filmes: number[];
}