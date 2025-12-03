# Projeto Mostra Tech


## Alunos

* Bruno Fernandes
* Caroline Vitória Vieira de Abreu
* Gabriel Weydson
* Miguel
* Thiago Henrique de Nascimento Assis
* Thiago Reis

## Tecnologias utilizadas

### Front-End:

* ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)

* ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

### Back-End:

* ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

* ![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white) 

* ![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)

* ![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white)

* ![MySQL](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)


## Instalações

### 1. Node.js 

* Baixar e instalar o [Node.js](https://nodejs.org).

### 2. Express.js 

* Instalar o framework Express.js:

```bash
    npm install express --save
```

### 3. Sequelize 
* Instalar o ORM Sequelize:

```bash
    npm install --save sequelize
```

### 4. MySQL2 

* Instalar o módulo de conexão com MySQL:

```bash
    npm install --save mysql2
```

### 5. Banco de Dados (MySQL)

* Criar usuário MySql:

```sql
    CREATE USER 'admin'@'localhost' IDENTIFIED BY 'tech2025';
```

* Garantir privilégios ao usuário:  

```sql
    GRANT ALL PRIVILEGES ON *.* TO 'admin'@'localhost';
```

* Criar database:

```sql
    CREATE DATABASE mostra_tech;
```

## Execução

* Rodar servidor:

```bash
    npm server
```
* Com nodemon:

```bash
    nodemon server 
```

#### Nodemon

* Para instalar o nodemon:

```bash
    npm install -g nodemon
```
