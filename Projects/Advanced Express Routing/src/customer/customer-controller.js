const moment = require('moment');
const customers = require('./customers');

function filterCustomers(req, res) {
    let result = customers;

    //by gender
    if (req.query.gender) {
        result = result.filter((customer) => 
            customer.gender.toLowerCase() === req.query.gender.toLowerCase()
        );
    }

    //by age 
    if (req.query.age) {
        result = result.filter((customer) => 
            moment().diff(customer.birthday,'years') == req.query.age
        );
    }

    //by date created (range)
    if (req.query.minDate && req.query.maxDate) {
    
        result = result.filter((customer) => 
            customer.createdAt >= req.query.minDate && customer.createdAt <= req.query.maxDate
        );
    }

    
    res.send(result);
}

module.exports = {
    filterCustomers,
};