var app = require('express')();

app.get("/", function(req, res){
    res.send("<h1>Hello to my site</h1>")
})

app.get("/buy/:thing", function(req, res){
    res.render('buy.ejs', {thingVar: req.params.thing})
})

app.get("/posts", function(req, res){
    var posts = [
        {title: "Post 1", author: "Mark"},
        {title: "Post 2", author: "Tim"},
        {title: "Post 3", author: "John"},
        {title: "Post 4", author: "Joe"},
        {title: "Post 6", author: "Ann"},
    ];

    res.render("posts.ejs", {posts: posts})
})


app.listen('3000', process.env.IP, function(){
    console.log('Server is RUNNING!')
})