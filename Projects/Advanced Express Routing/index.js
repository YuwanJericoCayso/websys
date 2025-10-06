const express = require('express');
const app = express();
app.use(express.json());

const productsRoutes = require('./products/products-routes')
const customerRoutes = require('./customer/customer-routes')
const orderRoutes = require('./order/orders-routes')


app.use('/products',productsRoutes)
app.use('/customers',customerRoutes)
app.use('/orders',orderRoutes)


app.listen(3000,() => {
    console.log('Server has started on http://localhost:3000');
})