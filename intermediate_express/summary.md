#summary on intermidiate express:
    #methods:
        -render('file.ejs', {key: value})
        It does accept name of a ejs file (needs to be in views folder);

        -app.listen('port', process.env.IP, callback())
        Listens on port specified for requests

        -app.get("/route/:variable", callback())
        Will do a action for get request
        Accepts route and callaback function

        -res.redirect("/url")
            Allows us to redirect to a diffrent subpage after certain actions

    #EJS
        -needs to be installed to work
        -needs to be in /views folder to work
        -<%= variable %> - will render output in html
        -<% for(let i=0; i < 0; i++){ %>
        <% } %>
        Will execute js logic in ejs. Important every javascript related SYNTAX needs to be in it. That includes closing brackets
        -Variables are passed from the controller in app.get in render using a object notation

    #Adding assets to files
        -this requires this code:
        app.use(express.static('public'))
        it will be accesed in /public directory
        -In order to use the file in ejs we need to add:
        <link rel="stylesheet" href="app.css">

    #working with posts
        -when we recive post data we will need body parser to encode it
        var bodyParser = require("body-parser");
        app.use(bodyParser.urlencoded({extended: true}));
        -After that we can catch the post data in app.post callback
        req.body.friendName
        -in EJS forms action will specify the URL that requests goes to and method needs to be post:
        <form action="/addfriend" method="POST">
        -input name value will be the key of the value we are sending


    #packages:
        -express
        npm install express --save

        -ejs - used for templates, does not need to be exported in the js file
        npm install ejs --save 

        -body-parser
        npm install body-parser --save

