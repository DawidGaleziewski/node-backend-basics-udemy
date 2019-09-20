var app = require('express')();
//RENDER method
    //Lives on response object
    //It accepts file it will serve as a argument
    //Express server ejs files
        //EJS = embedded javascript
        //EJS files MUST be in views folder, this is not arbitrary!
        //We need EJS package 
            //npm install ejs --save

app.get("/", function(req, res){
    //We can send HTML
    res.render("home.ejs");
})

app.get("/inlove/:thing", function(req,res){
    //Passing argument down to the ejs file
    var thing = req.params.thing;
    //We pass data as a argument inside a object
    //Key is the name of variable that will be used in ejs
    res.render("love.ejs", {thingVar: thing});
})

app.listen(3000, process.env.IP, function(){
    console.log("Server is listening!!!");
})