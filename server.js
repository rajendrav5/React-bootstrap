var express = require('express');
var path = require('path');

var app = express();

app.use(express.static('dist'));

app.use('/static', express.static('dist'));

app.get('/', function(req, res){
    res.sendFile(path.resolve(__dirname, './index.html'));
});

app.get('/about', function(req, res){
    res.sendFile(path.resolve(__dirname, './index.html'));
});

app.get('/dropdown', function(req, res){
    res.sendFile(path.resolve(__dirname, './index.html'));
});

app.listen(6556, () => {
    console.log('i am active at 6556');
});