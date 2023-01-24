

var http = require('http');
var fs = require('fs')
var host = '127.0.0.1'
var port = 3000

var server = http.createServer(function(req,res){
	console.log('port number: 3000');
	//change the MIME type from 'text/plain' to 'text/html'
	res.writeHead(200,{'Content-Type':'text/html'});
	//reading file content
	fs.readfile('index.html', (err,data)=>{
		//checking for errors
		if(err)
			throw err;
		console.log("Operation Sucess")
		//sending response
		res.end(data);
	})
}).listen(3000)
