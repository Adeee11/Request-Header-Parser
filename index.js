var express = require('express');
var morgan = require('morgan');

var app = express();

app.use(morgan('short'));



app.get('/rhp', function(req, res){
	
	var resObj = {
		ipaddress: req.headers["x-forwarded-for"].split(',')[0],
		language: req.headers["accept-language"].split(',')[0],
		software: req.headers["user-agent"].split('(')[1].split(')')[0]
	};
	
	res.send(JSON.stringify(resObj));
});

app.listen(8080, function(){
	console.log('App running on Port 8080.');
});