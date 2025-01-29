const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors()) // Enable CORS

app.get('/', (req, res) => {
  res.send('Server started on Port 4000')
})
//test the api 
app.get('/users', (req, res) => {
  res.json([
    { id: 1, name: 'Juan' },
    { id: 2, name: 'Maria' }
  ])
})

app.listen(4000, () => {
  console.log('Server started on port 4000')
})
