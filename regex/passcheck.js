const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
})

readline.question('Enter the password!', pass=>{
	var pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;;
	var res = pass.match(pattern)
	if(res){
		console.log('Damn bro the pass is strong')
	}else{
		console.log('Haha thats one weak pass bro')
	}
	readline.close()
})
