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
        unique: true, 
        allowNull: false
    },
    password: { 
        type: db.Sequelize.STRING, 
        allowNull: false
    },
    isONG:{
        type: db.Sequelize.BOOLEAN,
        defaultValue: false // false para usuário comum, true para ONG
    }
});

/* bcrypt hash (converter a senha em hash para mais segurança) */
User.beforeCreate(async (user, options) => {
    return bcrypt.hash(user.password, 10)
    .then(hash => {
        user.password = hash;
    })
    .catch(err => {
        throw new Error();
    });
});

//User.sync({force:true}); //Descomente esta linha para criar(OU ATUALIZAR)  a tabela no banco de dados, depois comente novamente

module.exports = User;
