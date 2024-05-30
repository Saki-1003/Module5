const express = require('express')
const router = express.Router()

router.get('/',(req,res) => {
  res.send('Hello backend')
})

router.get('/About', (req, res) =>{
  res.send('Module5 Backend Development')
})

router.get('/Contact', (req, res) => {
  res.send('TEL 123-4567-890')
})

module.exports = router