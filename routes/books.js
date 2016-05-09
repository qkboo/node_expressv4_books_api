var express = require('express');
var router = express.Router();

var books = [{
	"title": "코딩의 즐거움!!!",
	"author" : "고강태",
	},
	{
	"title": "코딩의 즐거움!!!",
	"author" : "고강태",
	}];
var book = {
	"title": "",
	"author" : "",
	"year" : 0
};
// API /api/books 
router.route('/books')
    .get( function(req, res) {
	    console.log( 'GET /api/books' );
  		// res.send(JSON.stringify(books));
	    res.render('books', { "title" : "GET /api/books", 
	    					  "books" : books});
	})
	.post( function(req, res) {
		console.log("Adding a Book: " + req.body.title );

	    book.title = req.body.title;
	    book.author = req.body.author;
	    book.year = req.body.year;
	    return res.send( JSON.stringify(book));
	})
    ;
// API /api/books/:id
router.route('/books/:id')
    .get( function(req, res, next) {
	    console.log( 'GET /api/books/:id' );
  		res.send('Request by ID:' + req.params.id);
	})
	.put( function(req, res) {
		book.title = req.body.title;  // update 
		return res.json({ title: book.title, message: 'Book updated!' });
	})
	.delete(function(req, res) {
		book.title = req.body.title;  // update 
        return res.json( {message:"ID("+req.params.id+") Successfully deleted!"} );
	})
    ;

module.exports = router;
