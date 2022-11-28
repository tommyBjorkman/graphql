const { products } = require("../db")

exports.Category = {
    products: (parent, args, context) => {
        const categoryID = parent.id;
        return products.filter((product) => product.categoryID === categoryID)
    },
}