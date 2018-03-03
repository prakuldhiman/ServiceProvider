// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

// Get our API routes
// const api = require('./server/routes/api');

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Catch all other routes and return the index file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});


// Mongo DB congigure
var mongo = require('mongodb');
var MongoClient = mongo.MongoClient;
var objectid = require('mongodb').ObjectID;
var url = "mongodb://localhost:27017/mydb";

// ADD Book in MongoDB
// app.post('/addBook', function (req, res) {
//     // Connect with Mongo Client
//     MongoClient.connect(url, function (err, db) {
//         if (err) throw err;
//         db.collection("bookStore").insertOne(req.body, function (err, res) {
//             if (err) throw err;
//             console.log(req.body.Title + " inserted");
//             db.close();
//         });
//     });
//     res.send(req.body.Title + " inserted");
// })

// app.post('/viewBook', function (req, res) {
//     // Connect with Mongo Client
//     MongoClient.connect(url, function (err, db) {
//         if (err) throw err;
//         db.collection("bookStore").find({}).toArray(function (err, result) {
//             if (err) throw err;
//             res.send(result);
//             db.close();
//         });
//     });
// })

// app.post('/updateBook', function (req, res) {
//     // Connect with Mongo Client
//     MongoClient.connect(url, function (err, db) {
//         if (err) throw err;
//         req.body.updateBook._id = objectid(req.body.updateBook._id);
//         var newvalues = req.body.updateBook;
//         db.collection("bookStore").updateOne({ _id: objectid(req.body.oldBook._id) }, newvalues, function (err, res) {
//             if (err) throw err;
//             if (res) {
//                 console.log(req.body.updateBook.Title + " updated");
//             };
//             db.close();
//         });
//     });
// })


// app.post('/deleteBook', function (req, res) {
//     // Connect with Mongo Client
//     MongoClient.connect(url, function (err, db) {
//         if (err) throw err;
//         var myquery = { _id: objectid(req.body._id) };
//         db.collection("bookStore").deleteOne(myquery, function (err, obj) {
//             if (err) throw err;
//             console.log(req.body.Title + " deleted");
//             db.close();
//         });
//     })
// });

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));