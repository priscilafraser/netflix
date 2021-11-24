import { IsNotEmpty, IsOptional} from 'class-validator';

export class CreateFilmeDto {
  @IsNotEmpty()
  nome: string;

  @IsOptional()
  imagem: string;

  @IsNotEmpty()
  ano_lancamento: number;

  @IsNotEmpty()
  tempo_duracao: number;

  @IsOptional()
  generos: number[];

  @IsOptional()
  users: number[];
}