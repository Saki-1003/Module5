const express = require('express')
const app = express()
const cors = require('cors')
const port = 3500
const appRouter = require('./routes/router')
const swaggerUi = require('swagger-ui-express');
swaggerDocument = require('./swagger.json');

app.use(cors())
app.use('/', express.static('public'))
app.use('/products', appRouter)

app.use('/api-docs',swaggerUi.serve, swaggerUi.setup(swaggerDocument));  

app.listen(port, () => {
  console.log(`app is listening on port ${port}`)
})