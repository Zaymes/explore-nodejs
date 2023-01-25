var fs = require('fs')
//reading file asynchronously
fs.readFile('file.txt',(err,data)=>{
	if(err){
		throw err;
	}
	console.log("Content from the file reading as async: ",data)
})

//reading file synchronously
var filename = 'file.txt'
var content = fs.readFileSync(filename);
console.log('Reading synchronously :', content)
