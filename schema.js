const { gql } = require("apollo-server");

exports.typeDefs = gql `
type Query {
    products: [Product!]!
    product(id: ID!): Product
    categories: [Category!]!
    category(id: ID!): Category
}
#vi gör en kategori som är ett object, i vårt object lägger vi till våra värden. 
type Product {
    id: ID!
    name: String!
    description: String!
    quantity: Int!
    image: String!
    price: Float!
    onSale: Boolean!
    category: Category
}

type Category {
    id: ID!
    name: String!
    products: [Product!]!
}
`;