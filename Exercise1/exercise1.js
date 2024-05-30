const express = require('express')
const app1 = express()
const app2 = express()

const route = require('./routes/router')

const port1 = 2000
const port2 = 2001

app1.use('/', route)
app2.use('/', route)

app1.listen(port1, () =>console.log(`Web server activated and listening request on port ${port1}`))
app2.listen(port2, () =>console.log(`Web server activated and listening request on port ${port2}`))