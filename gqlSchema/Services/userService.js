const User = require('../../models/User');

const getUsers = () => {
    User.findAll()
        .then(users => {
            return users;
        })
        .catch(err => {
            console.log(err);
        });
}

module.exports={
    getUsers
}