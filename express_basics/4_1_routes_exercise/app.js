var express = require('express');
var app = express();

app.get("/", function(request, response){
    response.send('Hi there, welcome to my assignment')
})


//Using variables in path
app.get('/speak/:animal', function(request, response){
    console.log(request.params.animal);

    var sounds = {
        pig: "Oink",
        dog: "How!",
        cow: "Moo!",
        axolotl: "Bulp"
    }

    response.send(`${request.params.animal} says "${sounds[request.params.animal.toLocaleLowerCase()]}"`)
    
    // switch(request.params.animal){
    //     case "pig":
    //         response.send('OoOink!')
    //     break;
    //     case "cow":
    //         response.send("Moo!");
    //     break;
    //     case "dog":
    //         response.send("Woof! Woof!");
    //     break;
    //     case "axolotl":
    //         response.send("Bulp bulp");
    //     break;
    //     //PS. it is case sensitive
    //     case "HR":
    //         response.send("What does the animal say?");
    //     break;
    //     default:
    //         response.send("What even is that thing?")
    // }
})

//Usint variables
app.get('/repeat/:string/:times', function(request, response){
    var resault = "";
    for(let i=0; i < Number(request.params.times); i++){
        resault += " " + request.params.string
    }
    response.send(resault)
})

//Error when subpage does not exists - !MUST BE THE LAST REQUEST!
app.get('*', function(request, response){
    response.send('Sorry, this page could not be found')
})

app.listen('3000', process.env.ip, function(){
    console.log('~~SERVER IS RUNNING~~')
})