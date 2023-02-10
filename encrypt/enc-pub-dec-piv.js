var crypto = require('crypto')
var fs = require('fs')

pub_key = piv_key = fs.readFileSync('public_key.pem').toString();

var buf = Buffer.from('this will be the text to be encrypted', 'utf8')

//encrypt the text

secretData = crypto.publicEncrypt(pub_key, buf)

console.log('The encrypted text is: ', secretData)

piv_key = {
 key: fs.readFileSync('private_key.pem').toString(),
debug  passphrase: 'sorry not releasing the passphrase'
}
//decrypt
//

decrypted_data = crypto.privateDecrypt(piv_key, secretData)

console.log('Data decrypted using priv key is :', decrypted_data.toString())

