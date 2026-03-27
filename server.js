//Configuração do Servidor com Express.js
const express = require('express');
const app = express();
const port = 8081;
const fileupload = require('express-fileupload');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const segredo = "SegredoShareSpot123"; // Segredo para JWT


function welcomeMessage() {
    console.log("<-----------UNINASSAU BOA VIAGEM - ADS 2026.1--------->")
    console.log("-> Reapresentação do ShareSpot")
    console.log("<----------------------------------------------->")
}

const db = require('./models/db');
const User = require('./models/User');  
const Donation = require('./models/Donation');

//Configurando Body Parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(fileupload());

// Tornando as pastas estáticas (para conectar os arquivos)
app.use(express.static('views'));
app.use(express.static('models'));
app.use(express.static('upload'));

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
        const isONG = req.body.isONG === "on" || req.body.isONG === "true";
        await User.create({
            id:req.body.id,
            name:req.body.name,
            email:req.body.email,
            phone:req.body.phone,
            password:req.body.password,
            isONG:req.body.isONG
        });
        res.redirect('/');
        window.alert("> Usuário cadastrado com sucesso!");
    } catch (error) {
        return res.send("> Erro ao cadastrar usuário: ");
    }
});


//Donation (cadastro de items)

app.post('/donate', async function (req, res) {
    try {
        await Donation.create({
            id: req.body.id,
            itemType:req.body.itemType,
            description:req.body.description,
            donator:req.body.donator,
            donatorEmail:req.body.email,
            donatorPhone:req.body.phone,
            condition:req.body.condition,
            imageName:req.files.image.name,
            image:req.files.image.mv(__dirname + '/views/upload/' + req.files.image.name)
        });
         if (user.isONG) {
            res.redirect('/doacoes#ong');
        } else {
            res.redirect('/doacoes');
        }
    } catch (error) {
        res.send("> Erro ao cadastrar item: " + error);
    }
});

//Resgate de doação

app.get('/resgatar/:id', async (req, res) => {
    Donation.destroy({
        where: {
            id: req.params.id}
    }).then(() => {
        res.redirect('/doacoes#ong');
    }).catch(function(error){
        res.send("> Erro ao resgatar doação: " + error);
    });
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
        res.send("> Erro ao listar usuários: " + error);
    }

   
});

//Página doações

app.get('/doacoes', async (req, res) => {
   
    try{
        const donations =  await Donation.findAll();
        if (donations===null) {
            res.render('routes/doacoes_teste.ejs', { donations: [] });
        } else {
            res.render('routes/doacoes_teste.ejs', { donations });
        }
    } catch (error){
        res.send("> Erro ao listar doações: " + error);
    }

   
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
            return res.status(400).send('> Senha incorreta! > Tente novamente.');
        }
        const token = gerarJwt(user); // Gerar o token JWT para o usuário autenticado

        res.json({ // Retornar o token e as informações do usuário para o frontend
            token,
            user: { id: user.id, name: user.name, phone: user.phone, isONG: user.isONG, email: user.email }
        });

    } catch (error) {
        res.status(500).send('> Erro ao fazer login: ' + error);
    }   
});


//Perfil do Usuário

app.get('/perfil', async (req, res) => {
    try {
        if (parseInt(req.params.id) !== req.userId) {
            return res.status(403).send('> Acesso negado! > Usuário não verificado ou token expirado!');
        }
        const usuario = await User.findByPk(req.userId);
        if (!usuario) {
            return res.status(404).send('> Usuário não encontrado!');
        }
        res.render('routes/perfil.html', { usuario });
    } catch (error) {
        res.status(500).send('> Erro ao buscar perfil: ' + error);
    }
});


//Update


app.post('/update-cadastro', autenticarToken, async (req, res) => {
    try {

        if (req.body.id != req.userId) {
        return res.status(403).send('> Acesso negado! > Usuário não verificado ou token expirado!');
        }
        const hash = await bcrypt.hash(req.body.password, 10);

        await User.update({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            password: hash,
        }, {
            where: { id: req.userId }
        });

        return res.redirect('/');

    } catch(error){
        return res.send("> Erro ao atualizar usuário: " + error);
    }
});
   


//Funções de Token

function gerarJwt(user){ // Função para gerar o token JWT, recebe o usuário como parâmetro e retorna o token
    const token = jwt.sign({ id: user.id, isONG: user.isONG }, segredo, { expiresIn: "1h" });
    return token;
}

function autenticarToken(req, res, next) { //Função para autenticar o token JWT
    const token = req.headers['authorization'] || req.body.token || req.query.token;

    if (!token) return res.status(403).json({ message: '> Token não fornecido!' });

    try {
        const verificar = jwt.verify(token, segredo);
        req.userId = verificar.id;
        req.isONG = verificar.isONG;
        next();
    } catch (error) {
        res.status(401).send('> Token inválido!');
    }
}

// Iniciar Servidor

try{
    app.listen(port);
    welcomeMessage();
    console.log(`> Servidor Iniciado! Acesse em: http://localhost:${port}` +'/');
}catch(error){
    console.log("> Erro ao iniciar o servidor: " + error);
}