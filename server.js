//Configuração do Servidor com Express.js
const express = require('express');
const db= require('.models/db');
const app = express();
const port = 8081;

//Configurando Body Parser
const bodyParser = require('body-parser');
const e = require('express');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Tornando as pastas estáticas (para conectar os arquivos)
app.use(express.static('views'));
app.use(express.static('models'));


// Routes

//Página principal (index.html)
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});



// Iniciar Servidor

app.listen(port);
console.log(`Servidor rodando em http://localhost:${port}`);