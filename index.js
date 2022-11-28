const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema");
const { Query } = require("./resolvers/query");
const { Product } = require("./resolvers/product");
const { Category } = require("./resolvers/category");



const server = new ApolloServer ({
    typeDefs,
    resolvers: {
        Query,
        Product,
        Category

    }
});

server.listen().then(({ url }) => {
    console.log("server is up " + url)
});