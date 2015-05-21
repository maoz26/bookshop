var bookshop = require ('./bookshop');
var express = require('express');
var url = require('url');
app = express();

var book1 = {
	"bookId": 1,
	"pages": 100,
	"year": "2011"
};
var book2 = {
	"bookId": 2,
	"pages": 200,
	"year": "2012"
};
var book3 = {
	"bookId":3,
	"pages":300,
	"year":"2013"
};
var book4 = {
	"bookId": 4,
	"pages": 400,
	"year": "2014"
};
var book5 = {
	"bookId": 4,
	"pages": 400,
	"year": "2015"
};

library=[];
library.push(book1);
library.push(book2);
library.push(book3);
library.push(book4);
library.push(book5);

app.get('/getAllBooks', function(req, res) {	//returns all the books that exists
	res.json(library);
});

app.get('/getBookNameById/:bookId?', function(req, res) { //enter bookId, returns book's details in json
	try {
		var bookId = req.query.bookId;;
		console.log(bookId);		
	}
	catch(err) {
		console.log("Error with bookId, the error is: " + err)
	}
	var found = bookshop.findBookById(bookId);
	console.log(found);
	if (found == 0) {
		res.json({status:404,msg:"There is no book with such Id"});
	}else{
		res.json({status:200,bookId:found.bookId,pages:found.pages,year:found.year})
	}
});

app.get('/getLongestBookInYear/:year?', function(req, res) { //enter year number, returns book's details in json
	try{
		var year = req.query.year;;
		console.log(year);		
	}
	catch(err){
		console.log("Error with year, the error is: " + err)
	}
	console.log(year);
	var found =bookshop.findlongestBookInYear(year);
	console.log(found);
	if (found ==0) {
		res.json({status:404,msg:"A book with that year does not exist"});
	}
	else{
		res.json({status:200,bookId:found.bookId,pages:found.pages,year:found.year})
	}
});

process.on('uncaughtException', function(err) {
	console.log('Caught exception: ' + err);
});
app.get('/', function(req,res){
	res.json(200,{status:"ok"})
});
app.get('/*', function(req,res){
	res.json(404,{status:"error"})
});
var port = process.env.PORT || 3000;

app.listen(port, function() {
	console.log("Listening to port " + port);
});
