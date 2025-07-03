var express = require('express');
var app = express();

app.use(express.static('./'));

app.get('/', function(req, res) {
res.render('index.html');
});

app.listen(8080, '127.0.0.1')