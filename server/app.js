const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

var movies = [
    {id: 1, name: "Minions", year: 2010},
    {id: 2, name: "UP", year: 2011},
    {id: 3, name: "Lord of the Rings", year:2009}
    
]

app.get('/getMovies', (req,res) => {
    res.json(movies);
})

app.listen(3000, () => {
    console.log("Application is running");
})