const express = require('express');
const router = express.Router();
const customerController = require('./customer-controller');


//customers?gender=Male
//customers?minDate=2024-07-01&maxDate=2024-07-10
//customers?age=30
router.get('/', customerController.filterCustomers);


module.exports = router;