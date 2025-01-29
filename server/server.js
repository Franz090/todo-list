const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Server started on Port 4000')
})

app.listen(4000,()=> {console.log("Server started on port 4000")})