const express = require('express');
const router = express.Router();
const productsController = require('./products-controller');


//products?name=laptop
//products?description=gaming
//products?minPrice=100&maxPrice=500
//products?minStock=10&maxStock=100

router.get('/', productsController.filterProducts);

module.exports = router;