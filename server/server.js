const express = require ('express')
const app = express()
const api = require('./server/routes/api')
// let's see it this can solve my connection problem
const Client = require('./server/models/client')
const path  = require('path')
const bodyParser = require('body-parser')
// app.use(express.static(path.join(__dirname, 'dist'))); 
app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

    next()
})


// Mongoose setup
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/clientDB', { useNewUrlParser: true })

// Setup to use routes on default
app.use('/', api)
//  Port on listen
const port = 4555
app.listen(port, function () {
    console.log(`Running on port ${port}`)
})