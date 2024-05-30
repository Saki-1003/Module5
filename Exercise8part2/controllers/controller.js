const axios = require('axios')
function fetchByAxios(req, res) {
  axios.get('https://fakestoreapi.com/products')
  .then(response =>  res.json(response.data))
}

module.exports = {fetchByAxios}

