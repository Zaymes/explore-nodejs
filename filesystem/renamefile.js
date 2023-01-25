
var fs = require('fs')

// have to pass relative path for the files
fs.rename('nameless.txt','renamed.txt',(err)=>{
	if(err){
		console.log('File renamed successfully')
	}
})

// naming synchronously

fs.renameSync('renamed.txt','renamed_sync.txt')


//Note
// delteing file
// use fs.unlink
// same as on other methods
//

