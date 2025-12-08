//Configuração do Servidor com Express.js
const express = require('express');
const app = express();
const port = 8081;

const jwt = require('jsonwebtoken');

const db = require('./models/db');
const User = require('./models/User');  

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

//User (Cadastro)

app.post('/cadastro', async function (req, res) {
    try {
        await User.create({
            id:req.body.id,
            name:req.body.name,
            email:req.body.email,
            password:req.body.password
        });
        res.redirect('/');
        window.alert("Usuário cadastrado com sucesso!");
    } catch (error) {
        res.send("Erro ao cadastrar usuário: " + error);
    }
});

/*
Routes
*/

//Página principal (index.html)

app.get('/', (req, res) => {
res.sendFile(__dirname + '/views/routes/index.html');
});

// Página Sobre

app.get('/sobre', (req, res) => {
res.sendFile(__dirname + '/views/routes/sobre.html');
});

//Página Cadastro

app.get('/cadastro', (req, res) => {
res.sendFile(__dirname + '/views/routes/cadastro.html');
});


//Página Itens

app.get('/itens', (req, res) => {
res.sendFile(__dirname + '/views/routes/itens.html');
});

//Login

app.post('/login', async (req, res) =>{
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(400).send('Usuário não encontrado');
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).send('Senha incorreta');
        }
        const token = jwt.sign({ id: user.id }, 'secret_token', { expiresIn: '1h' });
        res.status(200).json({'Login realizado com sucesso': token});
    } catch (error) {
        res.status(500).send('Erro no servidor: ' + error);
    }   
});

// Iniciar Servidor

try{
    app.listen(port);
    console.log(`Servidor rodando em http://localhost:${port}`);
}catch(error){
    console.log("Erro ao iniciar o servidor: " + error);
}