# ✨ CRUD Delta

## Este é um projeto desenvolvido para o processo seletivo Delta.

> Desenvolvido utilizando Visual Studio Code.

> 💻 É necessário possuir algumas tecnologias na máquina para o funcionamento da aplicação:

- [Docker](https://www.docker.com/get-started) "Entrega software em pacotes chamados contêineres"
- [DBeaver](https://dbeaver.com/download/) "Ferramenta de administração de banco de dados"
- [Postgres](https://www.postgresql.org/download/) "Banco de dados"
- [NodeJS](https://nodejs.org/en/)

> Caso possua o Docker e o Postgres na máquina:

> > Será necessário atualizar o arquivo 'ormconfig.json' para o usuário e senha atual do postgres em sua máquina.
> > Coloque o docker para rodar o container do postgres.

--

> Caso você não possua o Docker e/ou o Postgres na máquina:

> > Instale o docker e/ou execute o comando a seguir: `docker run --name postgres-db -e POSTGRES_PASSWORD=123456 -p 5432:5432 -d postgres`.
> > Coloque o docker para rodar o container do postgres.

# Execução

## Executando o banco de dados:

Garanta o seu postgres executando na porta 5432 (ou na porta atual da sua máquina - lembrando de configurar o ormconfig.json de acordo).
Em seguida, utilize um gerenciador de banco de dados, sugerido o DBeaver conectando ao Postgres, e crie um Banco de Dados com o nome "delta".

## Clone este repositório

> Utilize o gitbash para clonar o projeto:

$ git clone https://github.com/lucianoferreirasa/delta-Backend

## Executar a aplicação

> Execute o comando a seguir para instalar as dependências do projeto:

$ yarn

> posteriormente execute o comando abaixo para criar as tabelas do banco de dados:

$ yarn typeorm migration:run

> por fim, execute o comando abaixo para colocar o back-end rodando:

$ yarn dev

## Vamos executar o front-end para testar o projeto completo

> siga para o link: https://github.com/lucianoferreirasa/delta-Frontend

Foram utilizadas as seguintes tecnologias no projeto:

- [Express](https://expressjs.com/pt-br/starter/installing.html)
- [Typeorm](https://www.npmjs.com/package/typeorm)
- [Uuid](https://www.npmjs.com/package/uuid)
- [Reflect-metadata](https://www.npmjs.com/package/reflect-metadata)
- [Cors](https://www.npmjs.com/package/cors)
- [Yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable)
- [Typescript](https://www.typescriptlang.org/download)
- [Axios](https://www.npmjs.com/package/axios)

> O projeto
> Foi um CRUD de alunos, com armazenamento no banco de dados postgres.
