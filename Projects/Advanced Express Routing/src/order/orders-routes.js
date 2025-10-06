const express = require('express');
const router = express.Router();
const ordersController = require('./order-controller');


//orders
//orders?status=Shipped
//orders?minTotal=10&maxTotal=100
router.get('/', ordersController.filterOrders);


module.exports = router;