var express = require('express');
var morgan = require('morgan');

var app = express();

app.use(morgan('short'));


app.get('/', function(req, res){
	res.send(`Go to http://${req.headers.host.split(':')[0]}/rhp to see the Request Header Parser MicroService In Action`);
});


app.get('/rhp', function(req, res){
	
	var resObj = {
		ipaddress: req.headers["x-forwarded-for"].split(',')[0],
		language: req.headers["accept-language"].split(',')[0],
		software: req.headers["user-agent"].split('(')[1].split(')')[0]
	};
	
	res.send(JSON.stringify(resObj));
});

app.listen(process.env.PORT || 8080, function(){
	console.log('App running on Port '+ process.env.PORT || 8080);
});