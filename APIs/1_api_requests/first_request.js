// we will use request package for requests in node
var request = require('request');

const requestURL = 'https://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=e7336c281c3b4f9e7da03a467444db14';

//It will use callback to handle the wait time
request(requestURL, function(error, response, body){
    if(!error && response.statusCode === 200){
        //We will get undefined. It looks like js object but it is a
        console.log(body.main)

        //Check for type
        console.log(typeof body)

        //We need to pasre string to object
        var parsedBody = JSON.parse(body);
        console.log(typeof parsedBody)

        //We can now work with the object
        console.log(parsedBody.list[0].main)
    } 
})
