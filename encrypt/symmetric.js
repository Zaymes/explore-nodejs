var crypto = require('crypto'),algorithm = 'aes-256-ctr',password = 'RJ23edrf';

function encrypt(text){
	var cipher = crypto.createCipher(algorithm, password)
	var crypted = cipher.update(text,'utf8', 'hex')
	crypted += cipher.final('hex')
	return crypted;
}

function decrypt(text){
	var decipher = crypto.createDecipher(algorithm, password)
	var decrypt = decipher. update(text, 'hex','utf8')
	decrypt += decipher.final('utf8')
	return decrypt
}

var text = "Encryption and Decryption are awesomme!!"
var enc_text = encrypt(text)
console.log('Can you make sense of this:  ', enc_text)

var dec_text = decrypt(enc_text)
console.log('Decrypted text of above: ', dec_text)
