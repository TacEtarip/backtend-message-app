var express = require('express');
var app = express();

var messages = [{ text: 'some test', owner: 'tim' },
{ text: 'some test', owner: 'jane' }];

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/messages', (req, res) => {
    res.json(messages);
});

app.listen(1234);