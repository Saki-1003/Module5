//The app.js file should have all of the logic for the server (creating the Express app, adding all
//middleware functions and routes, etc.) and then the index.js file should only require the app
//from this file and then make it listen on a certain port. We have this file seperation because
//then we can pass this app to supertest and not have it listening on a set port. supertest creates
//a random port for the server when running the test so we don't need any ports or listening happening
//in the app.js file. The listening logic gets moved to index.js because when testing the server
//manually we still need to know the exact port number so then we can connect to the server.

const express = require('express')
const app = express()
port = 3000

const calcRouter = require('./routes/calculatorRoute')
app.use('/Calculator', calcRouter)

module.exports = app