var fs = require('fs')

// write files asynchronously

new_data = "This data will append at the end of file asyncly"

fs.appendFile('file.txt',new_data,(err)=>{
	if(err){
		throw err;
	}
	console.log('The content was written asyncly')
})

//write syncly

new_data2 = "this will be appended syncly"

fs.appendFileSync('file.txt',new_data2);
console.log('sync append sucess!!')

