var ws = require('fs')

const {Console} = require('console')

const output = ws.createWriteStream('./stdout.log');
const errOutput = ws.createWriteStream('./stderr.log');

//custom console
const print = new Console(output,errOutput)
//use the new console

const roll = 869

print.log('roll:%d', roll)
print.log('this will be stored in a file');
