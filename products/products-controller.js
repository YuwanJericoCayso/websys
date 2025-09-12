const products = require('./products');

function filterProducts(req, res) {
    let result = products;
    

    //by name
    if (req.query.name) {
        result = result.filter((product) => 
            product.name.toLowerCase().includes(req.query.name.toLowerCase())
        );
    }

    // by description
    if (req.query.description) {
        result = result.filter((product) => 
            product.description.toLowerCase().includes(req.query.description.toLowerCase())
        );
    }

    // by price range
    if (req.query.minPrice && req.query.maxPrice) {
        result = result.filter((product) => 
            product.price >= req.query.minPrice && product.price <= req.query.maxPrice
        );
    }

    //by stock range
    if (req.query.minStock && req.query.maxStock) {
        result = result.filter((product) => 
            product.stock >= req.query.minStock && product.stock <= req.query.maxStock
        );
    }

    res.send(result);
}

module.exports = {
    filterProducts,
};