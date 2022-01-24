const express = require('express');
const path = require('path');
const hbs = require('hbs');
const bodyparser = require('body-parser');

const app = express();

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
        submittetxt: 'Account created successfully'
    })
})

// Access the data
app.get('/success', function (req, res) {
    res.query('success', {
        submittetxt: 'Account created successfully'
    })
})

// localhost
app.listen('5000', () => {
    console.log('server started!');
})