import { GraphQLServer } from 'graphql-yoga';
import resolvers from './graphql/resolvers';

  const server = new GraphQLServer({
    typeDefs: "graphql/schema.graphql", // 여기에서 발견해서
    resolvers // 여기서 처리한다
})

server.start(() => console.log("Graphql Sever Running"));