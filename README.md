# README
# Desafio
``
O desafio é desenvolver um sistema de gerenciamento de funcionários, este 
sistema será composto de um cadastro de funcionários e cadastro de cargos.
``

## Instruções
* Fique à vontade para usar bibliotecas/componentes externos.
* Utilize boas práticas de programação.
* Documentar como rodar o projeto no readme.md do git/bitbucket.

## Requisitos
* O sistema deverá ser desenvolvido utilizando Ruby on rails, react.js e postgreSQL.
* Você̂ deve criar um CRUD que permita cadastrar as seguintes informações: Dados do funcionário (nome, sobrenome, cargo, data de nascimento, data de admissão e salário)
* Cargo (descrição do cargo e atividades)

## Obs
```
São duas tabelas diferentes, uma para funcionário e outra para cargo.
Utilizar banco de dados PostgreSQL para armazenar os dados, outro banco de dados não será aceito.
```

# Steps
## Passos para iniciar os serviços

### Baixar o Repositório
* git clone https://github.com/allysonhalley/job-emr.git

### Verificar instalações:
- ruby -v
- rails -v
- postgres --version
- node -v
- npm -v
```
Obs.: Caso não apareça a versão deverá ser instalado os faltantes.
```

### Comandos:
* No termninal criar um banco postgres:
https://www.postgresqltutorial.com/psql-commands/

``
/server
``
* Inserir dependências:
```
bundle install
```
* testar funcinamento: 
```
rails s
```

``
/client
``
* Inserir dependências:
```
yarn
```
* Testar funcionamento:
```
yarn start
```
