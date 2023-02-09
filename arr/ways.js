// diff ways to create arrs in js

var names = ['ram','ravan','sita']
console.log(names.length)

// new arr of length 3
var arr = new Array(3)
arr = ['nasty', 'grizzle','vsx']

// new arr at declaration
var arr1 = new Array('unwritten','sundaina','ghattekulo')

console.log('Initial Values Incoming')
console.log('names: ', names)
console.log('top artist of nepal: ', arr)
console.log('top tracks of theirs: ', arr1)

//push mehtod in arrs
arr.push('Dong')
console.log('the arr was supposed to be of len 3 let"s see if js allows us to add anotheir artist in arr',arr)

//pop
arr.pop()
console.log('here is top 3 again after pop', arr)

//unshift
//insert in the begining of the arr
arr.unshift('YB')
console.log('UNSHIFT THE TOP 3',arr)

//shift
arr.shift()
console.log('YB AD top3',arr)

//revrese
arr.reverse()
console.log('reverse', arr)

//sort
arr.sort()
console.log('sorted artists', arr)

//splice method => arr.slpice(2,2,'mess','not mess')
//splice  method (remove) => arr.splice(2,2))
//
//concat

var newarr1 = [1,2]
var newarr2 = [4,5]
var newarr3 = newarr1.concat(newarr2)
console.log('newarr1 + newarr2: ', newarr3)

console.log('indexof(5)', newarr3.indexOf(5))

//lastIndexOf()
// same as indexOf but returns last index, returns -1 if not found

//join
// default sepertor is ,
console.log('joined the arr and return str', newarr3.join())

//slice(start,end)

// every()
// if every elements obeys return true otherwise false



