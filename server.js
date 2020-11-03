//Using Express
const express = require('express')
const app = express()
const port = 3000

const path = require('path')

//Creating Roots - http://localhost:3000
app.get('/', (req, res) => {
  res.send('Welcome to Data Representation and Querying!')
})

//New Route Path - http://localhost:3000/hello
//Basic API - http request and response using names
app.get('/hello/:name',(req, res)=>{
    console.log(req.params.name);
    res.send('Hello ' + req.params.name);
})

//New Route  - API Movies - http://localhost:3000/api/movies
app.get('/api/movies',(req, res)=>{
    const mymovies =[
            {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
            },
            {
            "Title": "Captain America: Civil War",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
            }
    ];
    res.json({movies:mymovies});
})

//New Route - HTML Page - http://localhost:3000/test
app.get('/test', (req, res)=>{
    res.sendFile(__dirname + '/index.html');
})

//Set up the web Server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})