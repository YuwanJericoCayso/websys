const orders = require('./orders');

function filterOrders(req, res) {
    let result = orders;

    //by status
    if (req.query.status) {
        result = result.filter((order) => 
            order.status.toLowerCase().includes(req.query.status.toLowerCase())
        );
    }
    
    //by total amount range
    if (req.query.minTotal && req.query.maxTotal) {     
        result = result.filter((order) => 
            order.totalAmount >= req.query.minTotal && order.totalAmount <= req.query.maxTotal
        );
    }

    res.send(result);
}


module.exports = {
    filterOrders,
};