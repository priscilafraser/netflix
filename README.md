# API - Netflix

>API criada utilizando NestJS, Prisma, PostgreSQL e Docker. Nesta API é possível criar usuários, filmes e generos. Bem como fazer consultas.

## Executando o projeto

*Essa API utiliza o Postgres como banco de dados e o Prisma como ORM. Devido a utilização do Docker não é necessário instalação prévia de nenhuma aplicação para testá-la. Para execução de testes siga os passos a seguir:*

Para utilizar o projeto faça o dowload do arquivo zip, ou faça o clone em seu computador utilizando o Git.

Para instalação de todos os módulos listados como dependência, digite no terminal:

* `npm i`

Para executar o projeto com o node, digite no terminal:

* `npm run start:dev`


## Testando a API

Você pode utilizar algumas ferramentas para teste, porém durante a construção desta API foi utilizado o Insomnia e o Beekeeper Studio que é um editor SQL de código aberto.

### Exemplos de URLs:

* Essa é a URL de teste padrão para buscar todos os participantes: 

    http://localhost:3000/users

* Para buscar todos os filmes cadastrados:

     http://localhost:3000/filmes


### Exemplos de estruturas JSON:

Essa é a estrutura JSON para criar um usuário:

```json
{
	"nome": "Eles",
	"imagem": "user222222222222",
	"data_nascimento": "13/13/2013",
	"staff": false,
	"ator": false
}
```

