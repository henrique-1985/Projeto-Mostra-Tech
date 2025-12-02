# Projeto Mostra Tech


## Alunos

* Bruno Fernandes
* Caroline Vitória Vieira de Abreu
* Gabriel Weydson
* Miguel
* Thiago Henrique de Nascimento Assis
* Thiago Reis


## Instalações

### 1. Node.js
* Baixar e instalar [Node.js](https://nodejs.org).

### 2. Express.js

* Instalar o framework Express no terminal:

    npm install express --save

### 3. Sequelize

* Instalar o ORM Sequelize no terminal:

    npm install --save sequelize

### 4. MySQL2


    npm install --save mysql2

### 5. Banco de Dados (MySQL)

* Criar usuário MySql:

    CREATE USER 'admin'@'localhost' IDENTIFIED BY 'tech2025';

* Garantir privilégios ao usuário:  

    GRANT ALL PRIVILEGES ON *.* TO 'admin'@'localhost';
    FLUSH PRIVILEGES;

* Criar database:

    CREATE DATABASE mostra_tech;


## Execução

* Rodar servidor (no terminal):

    --> npm server
    ou
    --> nodemon server 

#### Nodemon
* Para instalar o nodemon:

    npm install -g nodemon

