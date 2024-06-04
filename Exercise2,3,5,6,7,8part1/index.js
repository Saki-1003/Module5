const express = require('express')
const app = require('./app')
const cors = require('cors')
const swaggerUi = require('swagger-ui-express');
swaggerDocument = require('./swagger.json');

const calcRouter = require('./routes/calculatorRoute')

const port = 2800

app.use(cors())
app.use('/Calculator', express.static('public'))
app.use('/Calculator', calcRouter)

app.use('/api-docs',swaggerUi.serve, swaggerUi.setup(swaggerDocument));  


app.listen(port,()=>{
  console.log(`app is listening on port ${port}`)
})

//an extension of the feedback in app.js:
//This index.js file should look something like this
/*
const app = require('./app);
const port = 2800;
app.listen(port, () => {
  console.log(`app is listening on port ${port}`)
})
*/
//and all of the other logic would be moved to the app.js file