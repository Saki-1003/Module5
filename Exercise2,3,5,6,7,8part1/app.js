const express = require('express')
const app = express()
port = 3000

const calcRouter = require('./routes/calculatorRoute')
app.use('/Calculator', calcRouter)

module.exports = app