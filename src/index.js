const express = require('express');
const path = require('path');
const hbs = require('hbs');
var bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const staticPath = path.join(__dirname, '../public');
app.use(express.static(staticPath));

// conver normal html to dynamic file
const viewPath = path.join(__dirname, '../view');
app.set('view engine', 'hbs');
app.set('views', viewPath);

// routes
// req receive data from browser
// res send data to browser
app.get('/login', function (req, res) {
    res.render('login', {
        title: 'login'
    })
})

app.post('/success', function (req, res) {
    res.render('success', {
        submittetxt: 'Account created successfully',
        name: req.body.name,
        email: req.body.email,
        pswd: req.body.pswd
    })
})

// localhost
app.listen('5000', () => {
    console.log('server started!');
})