//Configuração do Servidor com Express.js
const express = require('express');
const app = express();
const port = 8081;

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const db = require('./models/db');
const User = require('./models/User');  
const Donation = require('./models/Donation');

//Configurando Body Parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Tornando as pastas estáticas (para conectar os arquivos)
app.use(express.static('views'));
app.use(express.static('models'));

app.set('view engine', 'ejs');


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
            password:req.body.password,
            isONG:req.body.isONG
        });
        res.redirect('/');
        window.alert("Usuário cadastrado com sucesso!");
    } catch (error) {
        res.send("Erro ao cadastrar usuário: " + error);
    }
});


//Donation (caadastro de items)

app.post('/donate', async function (req, res) {
    try {
        await Donation.create({
            itemType:req.body.itemType,
            description:req.body.description,
            donator:req.body.donator
        });
        res.redirect('/doacoes');
        window.alert("Item cadastrado com sucesso!");
    } catch (error) {
        res.send("Erro ao cadastrar item: " + error);
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

//usuarios teste

app.get('/usuarios', async (req, res) => {
    try{
        const users =  await User.findAll();
        res.render('routes/usuarios.ejs', { users });
    } catch (error){
        res.send("Erro ao listar usuários: " + error);
    }

   
});

//doacoes teste

app.get('/doacoes-teste', async (req, res) => {
    try{
        const donations =  await Donation.findAll();
        res.render('routes/doacoes.ejs', { donations });
    } catch (error){
        res.send("Erro ao listar doações: " + error);
    }

   
});

//Página Itens

app.get('/doacoes',  (req, res) => {
    
   res.sendFile(__dirname + '/views/routes/doacoes.html');

});

//Página de Cadastro de Itens

app.get('/cadastrar-doacao', (req, res) => {
    res.sendFile(__dirname + '/views/routes/cadastrar_doacao.html');
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
        res.redirect('/doacoes');
        console.log('Login realizado com sucesso');
        //res.status(200).json({'Login realizado com sucesso': token});
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