const express = require('express')
const router = express.Router()
const fetchController = require('../controllers/controller')

router.get('/', (req, res) => {
  fetchController.fetchByAxios(req, res)
})

module.exports = router