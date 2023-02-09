var fs = require("fs")
var crypto = require("crypto")

var file_data  = fs.ReadStream('text.txt')
var hash = crypto.createHash('sha256')
file_data.on('data',function(data){
	hash.update(data)
})

file_data.on('end',function(){
	var gen_hash = hash.digest('hex')
	console.log('Has generated: ', gen_hash)
	fs.writeFileSync('text22.txt', gen_hash)
})
