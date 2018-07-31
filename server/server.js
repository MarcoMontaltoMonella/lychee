const express = require('express')
const server = express()

const PORT = 3000

server.get('/', (req, res) => res.send('Hello World!'))

server.listen(PORT, () => console.log('Example app listening on port ' + PORT + '!'))

module.exports = server