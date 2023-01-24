var http = require('http');
var fs = require('fs')


//TODO
//investigate why the host is not needed in this code
//outputs the html though the host is not provided here
//on the local server

var server = http.createServer(function(req,res){
	console.log('port number: 3000');
	//change the MIME type from 'text/plain' to 'text/html'
	res.writeHead(200,{'Content-Type':'text/html'});
	//reading file content
	fs.readFile('index.html', (err,data)=>{
		//checking for errors
		if(err)
			throw err;
		console.log("Operation Sucess")
		//sending response
		res.end(data);
	})
}).listen(3000)
