# Next Level Week 04

Projeto do evento da Rocketseat (Next Level Week 04).
Projeto para cálculo de Net Promoter Score (pesquisa de satisfação).

## Entidades

| Entidades | Atributos |
| - | - |
| users | id, name, email, created_at |
| surveys | id, title, description, created_at |
| surveys_users | id, user_id, survey_id, value, create_at |


## Funcionalidades

- Cadastro de usuários
- Cadastro de perguntas
- Envio de email para mandar as perguntas
- Rota para responder as perguntas

## Recursos

- Express
- Typeorm
- Sqlite
- Nodemailer
- Handlebars

## Iniciando o projeto

Após clonar o projeto, é necessário atualizar as dependências.

### Comandos para baixar dependências, executar migrations e iniciar a aplicação

```bash
yarn
yarn typeorm migration:run
yarn dev
```

### Configurações adicionais

1. Criar arquivo .env na raiz do projeto, com o conteúdo de .env.example