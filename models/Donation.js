const db= require('./db');

const Donation = db.sequelize.define('donation', {

    itemType: { 
        type: db.Sequelize.STRING, 
        allowNull: false
    },
    description: { 
        type: db.Sequelize.TEXT,
        allowNull: false
    },
    donator: {
        type: db.Sequelize.STRING,
        allowNull: false
    }
});

/*
Donation.create({
    itemType: 'Roupas',
    description: 'Camisas e calças em bom estado',
    donator:  'João Silva'
}).then(() => {
    console.log('Item de doação criado com sucesso!');
}).catch((error) => {
    console.error('Erro ao criar item de doação:', error);
});
*/


//Donation.sync({force:true}); //Descomente esta linha para criar a tabela no banco de dados, depois comente novamente

module.exports = Donation;
