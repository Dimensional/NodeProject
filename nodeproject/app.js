var express = require('express');
var app = express();

var port = process.env.PORT;
//var port = 5000;

app.use(express.static('public'));
app.use(express.static('src/views'));

app.get('/', function(req, res){
    res.send('Hello Folks!');
});

app.get('/routing', function(req, res){
    res.send('Hello Routing!');
});

app.listen(port, function(err){
    console.log('Server is up and runnong on port: ' + port);
});