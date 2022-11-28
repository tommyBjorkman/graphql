const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema");
const {products, categories} = require("./db")




  const resolvers = {
    Query: {
       // vi returnera vårt object och värden .
        products: () => products,
        product: (parent, args, context) => {
            const productId = args.id;

            const product = products.find(product => product.id === productId);
            if(!product)return null
            return product;
        },
        categories: (parent, args, context) => categories,
        category: (parent, args, context) => {
            const { id } = args;
            return categories.find((category) => category.id === id)
        }    
    },
    Category: {
        products: (parent, args, context) => {
            const categoryID = parent.id;
            return products.filter((product) => product.categoryID === categoryID)
        },
    },
    Product: {
        category: (parent, args, contex) => {
            const categoryId = parent.categoryId;
            return categories.find((category) => category.id === categoryId );
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