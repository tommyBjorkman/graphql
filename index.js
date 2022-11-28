const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql `
    type Query {
        hello: string
    }
`;


Server.listen().then(({ url }) => {
    console.log("server vis up " + url)
})