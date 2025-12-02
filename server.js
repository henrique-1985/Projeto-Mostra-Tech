//Configuração do Servidor com Express.js
const express = require('express');
const app = express();
const port = 8081;
const db= require('./models/db');

//Configurando Body Parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Tornando as pastas estáticas (para conectar os arquivos)
app.use(express.static('views'));
app.use(express.static('models'));


/*
Models
*/ 

//DataBase

(async() => {
    try {
        await db.sequelize.sync();
    } catch (error) {
        console.log("Erro ao sincronizar o banco de dados: " + error);
    }
});

/*
Routes
*/

//Página principal (index.html)

app.get('/', (req, res) => {
res.sendFile(__dirname + '/views/routes/index.html');
});




// Iniciar Servidor

try{
    app.listen(port);
    console.log(`Servidor rodando em http://localhost:${port}`);
}catch(error){
    console.log("Erro ao iniciar o servidor: " + error);
}