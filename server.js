const { ApolloServer } = require('apollo-server-express');
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const typeDefs = require('./gqlSchema/typeDefs');
const resolvers = require('./gqlSchema/resolvers');
const PORT = process.env.PORT || 5000;
const app = express();
const db = require('./db.js');

//test db connection with sequelize
db
.authenticate()
.then(() => {
    console.log("Connection has been established successfully");
})
.catch(err => {
    console.log("Unable to connect to the database:", err);
});

//for cross origin access
app.use(cors());
//parses body in requests
app.use(bodyParser.json());

//sets new apollo server
const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});