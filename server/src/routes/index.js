const express = require('express') 
const router = express.Router() 
const book = require('./book') 

router.use('/books', book)      // api/books/ app.get('/edit')

module.exports = router
