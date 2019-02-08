const { ApolloServer } = require('apollo-server-express');
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');

const typeDefs = require('./gqlSchema/typeDefs');
const resolvers = require('./gqlSchema/resolvers');

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});