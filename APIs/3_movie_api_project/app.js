
//Querie strings are constructed by:
    //# ? adding the querie
    //s= //search criteria (for this app)
    //apiKey=<apikey>
    //every single part needs to be connected with &

var express = require('express');
var app = express();
var request = require('request');
const apiKey = 'adcf8b5b';

app.set("view engine", "ejs")

app.get("/search", function(req, res){
    res.render("search");
})

app.get("/results", function(req, res){
    //Getting data passed from post /search
    //This data is passed thanks to form action="results"
    var query = req.query.search
    var url =`http://www.omdbapi.com/?s=${query}&apikey=adcf8b5b`
    
    request(url, function(error, response, body){
        if(!error && response.statusCode === 200){
            //Parse string to JSON object
            var parsedBody = JSON.parse(body)
            //Pass data to EJS template
            res.render('results', {data: parsedBody})
        }
    })
})


app.listen('3000', process.env.IP, function(){
    console.log(`Server was started on PORT: 3000`)
})