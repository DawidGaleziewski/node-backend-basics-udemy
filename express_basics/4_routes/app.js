
var express = require('express');
var app = express();



app.get("/", function(request, response){
    console.log("request from root!")
    response.send("Hi there!"); 
})

app.get("/bye", function(request, response){
    response.send("bye!")
})

app.listen("3000", process.env.ip, function(){
    console.log("####SERVER IS RUNNING####!")
})

//PARAMS (aka path variables)
    //We do not have to define each route, we can define a pattern
    //This is usefull if we have thousends of routes like on reddit
    app.get("/r/:subforumname", function(request, response){
        response.send("Welcome to a subforum!")
    })
    //This will work now in browser:
        //http://localhost:3000/r/puppies
        //http://localhost:3000/r/soccer
    
    //But this wont:
        //http://localhost:3000/r/puppies/lab
        //http://localhost:3000/r/soccer/brazil

//Another example of path variables
    //r and comments are a literal
    //:subforumName, :id and :title are variables and can change
    app.get("/r/:subforumName/comments/:id/:title", function(request, response){
        //console.log(request) request gives are possibility to access variables used
        //This prints the variables used in parrams
        console.log(request.params)
        response.send(`WELCOME TO THE ${request.params.subforumName} SUBFORUM`)
    })


//Splash * - any other route, that was not defined yet that will respond to any other directory for example that does not exist
    //This is good for erro messages
    //!IMPORTANT this has to be last. Otherwise it will display on all routes
    // !IMPORTANT order matters - first route that matches will be ONLY one run
app.get("*", function(request, response){
    response.send("SPLASH OPERATOR!")
})