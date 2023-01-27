const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});
readline.question('Enter you email adress', email=>{
var pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
var res = email.match(pattern)
if(res){
        console.log('It is valid email adress!');
}else{
        console.log('Please enter valid email adress!')
}
readline.close();
})
