const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const news_routes = require('./routes/News')

// Middleware
app.use(bodyParser.urlencoded({ extended: false })) // Configuration to bodyParser.
app.use(bodyParser.json()) // Convert every request body to json.

// CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use('/', news_routes)

module.exports = app