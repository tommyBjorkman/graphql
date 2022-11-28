const { ApolloServer, gql } = require("apollo-server");

// scaler types: string, int, float, boolean, id.

const typeDefs = gql `
    type Query {
        hello: String
        numberOfAnimals: Int
        price: Float
        isForSale: Boolean
    }
`;

const resolvers = {
    Query: {
        hello: () => {
            return "world";
        },
        numberOfAnimals: () => {
            return 24;
        },
        price: () => {
            return 39.90;
        },
        isForSale: () => {
            return true;
        },
    },
};

const server = new ApolloServer ({
    typeDefs,
    resolvers,
})

server.listen().then(({ url }) => {
    console.log("server is up " + url)
})