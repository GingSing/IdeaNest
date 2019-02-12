const User = require('../Services/userService');

const resolvers = {
    Query: {
        users: () => User.getUsers()
    },
};

module.exports = resolvers;