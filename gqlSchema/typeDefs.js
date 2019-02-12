const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        id: Int!
        email: String!
        token: Int!
        username: String!
        role: String
    }

    type Idea {

    }

    type Project {

    }

    type Query {
        user: User
    }

    type Mutation {
        postIdea (
            content: String!
        ): Idea

        likeIdea(
            ideaId: Int!
        ): Idea
    }
`;

module.exports = typeDefs;