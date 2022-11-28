const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql `
    type Query {
        hello: string
    }
`;

const resolvers = {
    Query: {
        hello: () => {
            return "world"
        },
    },
};

const server = new ApolloServer ({
    typeDevs,
    resolvers,
})

server.listen().then(({ url }) => {
    console.log("server is up " + url)
})