const express = require('express');
const router = express.Router();
const users = require('./data');
app.use(express.json());

// routes controllers & services

app.get('/',(req,res) =>{
    res.send('Shishers');
})

app.get('/users',(req,res) => {
    let result = users;

    if(req.query.word){
        result = result.filter((user) => user.word == req.query.params)
    }

})

