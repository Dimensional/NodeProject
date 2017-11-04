var express = require('express');
var app = express();

var port = process.env.PORT;
//var port = 5000;

app.get('/', function(req, res){
    res.send('Hello Folks!');
});

app.listen(port, function(err){
    console.log('Server is up and runnong on port: ' + port);
});