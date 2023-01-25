var http = require('http')
var fs = require('fs')

var server = http.createServer(function(req,res){
	res.writeHead(200,{"Content-Type":"video/mp4"});
	fs.exists('video.mp4',function(exists){
		if(exists){
			var rstream = fs.createReadStream('video.mp4')
			rstream.pipe(res)
		}
		else{
		res.send("It's a 404")
			res.end()
		}}
	)
}).listen(3000)
