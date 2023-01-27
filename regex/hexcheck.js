const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
});

readline.question('Enther the hexadecimal number', number=>{
	var pattern = /^[a-fA-F0-9]+$/g;
	var res = number.match(pattern);
	if(res){
		console.log('You entered valid hex!!')
	}else{
		console.log('Please Enter valid hex!!')
	}
	readline.close();
})

