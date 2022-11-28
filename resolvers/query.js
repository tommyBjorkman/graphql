const { categories, products } = require("../db")

exports.Query = {
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
 }