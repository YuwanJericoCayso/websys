const express = require('express');
const app = express();
const users = require('./data');
app.use(express.json());

const currentYear = new Date().getFullYear();
const bday = new Date(users.birthdate);


app.get('/students/id/:id', (req,res) => {
    res.send(users.filter((users) => users.id == req.params.id));
})

app.get('/students/course/:course', (req,res) => {
    res.send(users.filter((users) => users.course == req.params.course));
})

app.get('/students/yearlevel/:yearlvl', (req,res) => {
    res.send(users.filter((users) => users.yearLevel == req.params.yearlvl));
})

app.get('/students/admissionyear/:year', (req,res) => {
    res.send(users.filter((users) => users.admissionYear == req.params.year));
})

app.get('/students/admissionyearrange/range', (req,res) => {
    const year = users.filter((user) => user.admissionYear >= req.query.yearFrom && user.admissionYear <= req.query.yearEnd)
    res.send(year)   
})

app.get('/students/age/:age', (req,res) => {
    res.send(users.filter((user) => {
        const birthDay = new Date(user.birthdate);
        const now = new Date();

        const msDiff = now - birthDay;
        const second = 1000 * msDiff;
       

        return age == req.params.age
    }));
})



app.post('/students',(req,res)=>{
    console.log(details);
    res.send(`Success!!`);
})



app.listen(3000,() => {
    console.log('Server has started on http://localhost:3000');
})