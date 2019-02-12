const Sequelize = require('sequelize');
const db = require('../db.js');

const Idea = db.define('idea', {
    content: {
        type: Sequelize.STRING,
        allowNull: false
    },
    likes: {
        type: Sequelize.NUMBER,
        defaultValue: 0
    },
    approved: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    }
});

Idea.associate = (models) => {
    Idea.belongsTo(models.User);
    Idea.hasMany(models.Project);
}

module.exports=Idea;