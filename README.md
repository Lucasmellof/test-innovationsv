<p align="center">
  <h1>Teste Innovationsv</h1>
</p>

## 🏟️ Projeto

Este projeto consiste em uma API Restful que utiliza o [NestJS](https://nestjs.com/) como framework, a API provê
endpoints de *CRUD*(Criar, Ler, Atualizar e Deletar) permitindo que os usuários cadastrem, visualizem, atualizem e
deletem produtos. Além disso a API tem endpoints de visualização dos municípios do Rio de Janeiro através da API
do [IBGE](https://servicodados.ibge.gov.br).

## 💻 Tecnologias

- [TypeScript](https://www.typescriptlang.org/)
- [NodeJS](https://nodejs.org/)
- [NestJS](https://nestjs.com/)
- [Prisma](https://www.prisma.io/)
- [PostegreSQL](https://www.postgresql.org/)
- [Axios](https://axios-http.com)

## 🧰 Como executar

> Neste projeto eu utilizei o [PNPM](https://pnpm.io/), mas é possível executar o projeto com
> o [NPM](https://nodejs.org/) ou [Yarn](https://yarnpkg.com/).

1. Clone esse repositório.
2. Execute `pnpm install` para instalar a dependências.
3. Configure as variáveis de ambiente. Para fazer isso copie o `.env.sample` para `.env` e preencha as informações.
4. Gere os tipos do [Prisma](https://prisma.io/) usando `pnpm database:generate`.
5. Inicie uma instancia do [PostgreSQL](https://www.postgresql.org/).
6. Inicie a aplicação usando `pnpm start`.