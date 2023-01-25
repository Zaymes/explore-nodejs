var fs = require('fs')

// write asynchronously
var content = "writing this file asynchrounsouly to the file"
fs.writeFile('file.txt', content,(err)=>{
	if(err){
		throw err;
	}
	console.log('It\'s is saved');
})

//write to files synchronously

var syncContent = "this is the content written synchronously"
fs.writeFileSync('file.txt', syncContent)
console.log("Sync write success!!")

