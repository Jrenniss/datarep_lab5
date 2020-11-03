//Using Express
const express = require('express')
const app = express()
const port = 3000

//Creating Roots
app.get('/', (req, res) => {
  res.send('Welcome to Data Representation and Querying!')
})


//Set up the web Server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})