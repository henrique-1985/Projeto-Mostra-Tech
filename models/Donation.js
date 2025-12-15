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
    },
    condition:{
        type: db.Sequelize.STRING,
        allowNull: true
    },

    imageName:{
        type: db.Sequelize.BLOB('long'),
        allowNull: true
    },
    image: {
        type: db.Sequelize.BLOB('long'),
        allowNull: true
    }
});


//Donation.sync({force:true}); //Descomente esta linha para criar a tabela no banco de dados, depois comente novamente

module.exports = Donation;
