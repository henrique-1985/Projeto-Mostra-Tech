const Sequelize = require('sequelize');
const sequelize = new Sequelize('mostra_tech', 'admin', 'tech2025', 
{
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate().then(
    function(){
    console.log("Banco de dados conectado com sucesso");
}).catch(function(erro){
    console.log("Erro ao conectar com o banco de dados: " + erro);
});


module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
};

