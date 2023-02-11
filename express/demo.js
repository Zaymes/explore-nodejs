var express = require('express')
var app = express()

// example of routing in express

app.get('/',function(req,res){
	res.send('hello from very very simple server in the hoepage')
})

app.get('/about', function(req,res){
	res.send('this is the /about route. horrwy')
})

app.get('/signup', function(req,res){
	res.send('signup for the app that if you find the form')
})

app.listen(3000,function(){
	console.log('server is listening at port 3000')
})
