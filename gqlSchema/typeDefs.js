const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Query {
        hello: String
        find: String
    }
`;

module.exports = typeDefs;