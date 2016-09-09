import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';


const APP_PORT = process.env.APP_PORT || 3003;
const GRAPHQL_PORT = process.env.GRAPHQL_PORT || 8844;

const graphQLServer = express();
graphQLServer.use('/graphql', graphqlHTTP({ schema, graphiql: true }));

graphQLServer.listen(GRAPHQL_PORT, () => {
  console.log('listening at localhost:%s/graphql (POST method)', GRAPHQL_PORT);
});
