const User = require('../Services/userService');

const resolvers = {
    Query: {
        hello: () => 'Hello World!',
        find: () => User.getUsers()
    },
};

module.exports = resolvers;