var request = require('request');

var apiUrl = 'https://jsonplaceholder.typicode.com/users/'
request(apiUrl, function(error, response, body){
    //Locus need to be installed with npm install locus --save-dev
        //It will freeze the app in terminal so we can work with variables
    
    if(!error && response.statusCode === 200){
        var parsedData = JSON.parse(body);
        console.log(parsedData[1].name)
        //eval(require('locus'))
    }
})

console.clear()

//We can also use promises with package request promises
//npm install request-promise --save-dev
    var requestPromise = require('request-promise');
    
    requestPromise(apiUrl)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(`Error has occured: ${error}`)
        })

