
var http = require('http');
var fs = require('fs')



var server = http.createServer(function(req,res){
	console.log('running on the 127.0.0.1:3000 and server pdf');
	res.writeHead(200,{'Content-Type':'application/pdf'});
	fs.readFile('read.pdf', (err,data)=>{
		//checking for errors
		if(err){
			res.json({'status':'error',msg:err})
		}else{
		res.write(data)
		res.end();
		}
	})
}).listen(3000);
