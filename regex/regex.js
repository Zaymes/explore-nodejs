var fs = require('fs')

// here pattern to be matched is placed inside expression literals('/' in this case)
var reg = /ab*/

//can also create calling constructor
var reg = new RegExp('ab*');
// it will match a, ab, abb, abbbbbbb and so on 
// but not b, bc, abd etc.


// Now lets read text from data.text syncly. and look for regex and modify
// g:global scope, i:case-insensitive, m:multiline match

//read and store contents from file
var str = fs.readFileSync('data.txt').toString();

var pattern = /man/gim;

var myarray = str.match(pattern);

var len = myarray.length;
console.log("Occurence of pattern in string is: "+ len);

