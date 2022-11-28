const { ApolloServer, gql } = require("apollo-server");

// scaler types: string, int, float, boolean, id.

const typeDefs = gql `
    type Query {
        products: [Product!]!
    }
    type Product {
        name: String!
        description: String!
        quantity: Int!
        price: Float!
        onSale: Boolean!
    }
`;

const resolvers = {
    Query: {
        products: () => {
            return [
                {
                    name: "Bike",
                    description: "BMX cykel",
                    quantity: 22,
                    price: 1999.99,
                    onSale: true
                }
            ]
        }
    },
};

const server = new ApolloServer ({
    typeDefs,
    resolvers,
})

server.listen().then(({ url }) => {
    console.log("server is up " + url)
})