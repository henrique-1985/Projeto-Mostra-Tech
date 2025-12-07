const bcrypt = require('bcrypt');
const db = require('./db');

const User = db.sequelize. define('user', {

    id: {
        type: db.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: { 
        type: db.Sequelize.STRING, 
        allowNull: false
    },
    email: { 
        type: db.Sequelize.STRING, 
        allowNull: false,
    },
    password: { 
        type: db.Sequelize.STRING, 
        allowNull: false
    },
},

//User.sync({force:true});

module.exports = User;