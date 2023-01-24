

var http = require('http');
var fs = require('fs')



var server = http.createServer(function(req,res){
	console.log('running on the 127.0.0.1:3000 and serve audio');
	res.writeHead(200,{'Content-Type':'audio/mp3'});
	fs.exists('audio.mp3', function(exists){
		if(exists){
			var rstream = fs.createReadStream('audio.mp3')
			rstream.pipe(res)
		}
		else{
		res.end("Its 404 error")}
	})
}).listen(3000);
