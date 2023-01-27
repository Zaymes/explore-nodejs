var fs = require('fs')
// here we match tags instead of string
var filename = 'data.html'
var str = fs.readFileSync(filename).toString();
var pattern = /<(\"[^\"]*\"|'[^']*'|[^'\">])*>/gim;
var myarray = str.match(pattern);
var len = myarray.length;
console.log("Occurence of the pattern in the string is: ", +len);

