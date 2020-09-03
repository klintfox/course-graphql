var express = require('express');
var { graphqlHTTP } = require('express-graphql');
import schema from "./schema"
import { connect } from "./database"

const app = express();
connect();

app.get('/', (req, res) => {
    res.json({
        message: "Hello World"
    })
});

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
    context: {
        messageId: 'test'
    }
    // rootValue: root
}));

app.listen(3000, () => console.log("Server on port 3000"));