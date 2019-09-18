console.log("EXPRESS APP")
//Installing express:
    //~ npm install express --save

//Import the package
var express = require("express");

//We execute the package and save the execution to variable
var app = express()

//Playing with routes
    // "/" => "Hi there!"
    // "bye" => "Goodbye"
    // "/dog" => "HOW!"

// get method - First param is a path
    //Callback function takes two params, request and response
        //Request is a object that contains all information about request
app.get("/", function(req, res){
    console.log('Someone has made a request to root')
    res.send("Hi there");
});

//After adding new route we need to restart the server!
app.get("/bye", function(req, res){
    console.log('Someone has made a request to /Bye')
    res.send("Bye")
});

app.get("/dog", function(req, res){
    console.log('Someone has made a request to /DOG')
    res.send("How!")
})


//We need to tell express to listen on port
    //If we use c9 server we need to use process.env.PORT - it is enviromental variable
//process.env.IP - we use this in every app - describes on which ip to listen
app.listen("3000", process.env.IP, function(){
    //This callback is optional. Just to have more visual feedback on the fact it has started
    console.log("Server has started")
})


//We need to run the file with node app.js