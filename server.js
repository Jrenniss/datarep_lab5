//Using Express
const express = require('express')
const app = express()
const port = 3000

//Creating Roots - http://localhost:3000
app.get('/', (req, res) => {
  res.send('Welcome to Data Representation and Querying!')
})

//New Root Path - http://localhost:3000/hello
//Basic API - http request and response using names
app.get('/hello/:name',(req, res)=>{
    console.log(req.params.name);
    res.send('Hello ' + req.params.name);
})


//Set up the web Server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})