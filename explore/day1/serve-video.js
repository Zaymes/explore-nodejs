var http = require('http')
var fs = require('http')

var server = http.createServer(function(req,res){
	res.writeHead(200,{"Content-Type":"video/mp4"});
	fs.exist('video.mp4',function(exists){
		if(exists){
			var rstream = fs.createReadStream('video.mp4')
		}})
})
