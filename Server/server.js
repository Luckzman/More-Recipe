var express = require('express');
var app = express();

app.listen(1337,function(){
    console.log('Listening at port 1337')
});

app.get('/hello', function(request, response){
    response.send('Hello there, from Lucky!');
});