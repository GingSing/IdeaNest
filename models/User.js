const Sequelize = require('sequelize');
const db = require('../db.js');

const User = db.define('user', {
    email:{
        type: Sequelize.STRING,
        primaryKey: true
    },
    password:{
        type: Sequelize.STRING,
        allowNull: false
    },
    tokens:{
        type: Sequelize.NUMBER,
        defaultValue: 50
    },
    username:{
        type: Sequelize.STRING,
        defaultValue: "Anonymous"
    },
    role:{
        type: Sequelize.STRING,
        defaultValue: "Thinker"
    }
});

User.associate((models) => {
    User.hasMany(models.Idea);
    User.hadMany(models.Project);
})

module.exports=User;