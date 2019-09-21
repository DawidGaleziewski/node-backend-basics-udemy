var express = require('express');
var app = express();

//We need to require body parser to handle our req.body
var bodyParser = require("body-parser");
// We need to use the bodyParser
    //This is mostly copy and paste
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
})

var friends = ["Tony", "Miranda", "Ann", "JavaScript"]

app.get("/friends", function(req, res){
    res.render("friends", {friends: friends});
})

// Post route - adding data
app.post("/addfriend", function(req, res){
    // Data send is stored in req.body
        //Express however will return undefined as it cannot create this object
        //we need to install body-parser for this
            //npm install body-parser --save
            //We need to require the body parser
            //We need to use the body parser
    console.log(req.body.friendName)

    //We have now a object thans to body parser
    //We store tha value of the object
    var newFriend= req.body.friendName

    //We can push the value to the array
    friends.push(newFriend)
    //res.send("You have reached the post route!")

    //We can redirect to another route
    res.redirect("/friends")
})

app.listen('3000', process.env.IP, function(){
    console.log('#SERVER STARTED#');
})