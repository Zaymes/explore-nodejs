var http = require('http')
var fs = require('fs')

console.log('server will listern at : 127.0.0.1:3000')

var server = http.createServer(function(re,res){
	res.writeHead(200,{'Content-Type':'application/json'});
	//create json
	let json_response = {
		status: 200,
		message: 'successfull',
		result: ['sunday', 'monday','tuesday','wednesday'],
		code: 200
	}
	console.log('Server Running')
	res.end(JSON.stringify(json_response));
}).listen(3000)
