import express from "express";
// import graphqlHTTP from "express-graphql";
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');

const app = express();

app.get('/', (req, res) => {
    res.json({
        message: "Hello World"
    })
});

const schema = buildSchema(`
    type Query {
    hello: String
    }
`);

var root = {
    hello: () => {
        return 'Hello world!';
    },
};

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
    rootValue: root
}));

app.listen(3000, () => console.log("Server on port 3000"));