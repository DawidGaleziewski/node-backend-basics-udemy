var express = require('express');
var app = express();

//This will alow our express to use static filess like css to be served with the ejs file
app.use(express.static("public"));

// We can shorten our files by cutting of our .ejs extenshions.
// we need to let express know what file format are we using
app.set("view engine", "ejs")


app.get('/', function(req, res){
    res.render("home");
})

app.get('/subpage', function(re, res){
    res.render('subpage.ejs')
})

app.get('*', function(req, res){
    res.send('No site found!')
})

app.listen('3000', process.env.IP, function(){
    console.log('Server is running')
})