var express = require('express');

var app = express();

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});

app.use(express.static(__dirname + '/'));

app.listen(3000, function() {
	console.log("server started");
});