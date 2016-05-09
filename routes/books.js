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

// API /api/books 
router.route('/books')
    .get( function(req, res) {
	    console.log( 'GET /api/books' );
  		res.send(JSON.stringify(books));
	})
    ;
// API /api/books/:id
router.route('/books/:id')
    .get( function(req, res) {
	    console.log( 'GET /api/books/:id' );
  		res.send('Request by ID:' + req.params.id);
	})
    ;

module.exports = router;
