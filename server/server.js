var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var pg = require('pg');
var urlencodedParser = bodyParser.urlencoded({
    extended: false
});
var port = process.env.PORT || 8080;
var connectionString = 'postgres://localhost:5432/koalaHolla';
// static folder
app.use(express.static('public'));

//spin up server
app.listen(port, function() {
    console.log('server up on', port);
});
//
// base url
app.get('/', function(req, res) {
    console.log('base url hit');
    res.sendFile('../public/index.html');
});

//get koalas
app.get('/getKoalas', function(req, res) {
    console.log('getKoalas route hit');
    pg.connect(connectionString, function(err, client, done) {
        // if (err) {
        //     console.log('Opps: ' + err);
        // } else {
        //     console.log("connected to DB.");
        //     var query = client.query('SELECT * from koala_holla');
        //     var allKoala = [];
        //     query.on('row', function(row) {
        //         allKoala.push(row);
        //     });
        //     query.on('end', function() {
        //         done();
        //         console.log("showing all the 'kute' Koala " + allKoala);
        //    });
        //}
   });
// });
// //assemble object to send
// var objectToSend = {
//     response: allKoala
// }; //end objectToSend
// //send info back to client
// res.send(objectToSend);
});

// // add koala
// app.post( '/addKoala', urlencodedParser, function( req, res ){
//   console.log( 'addKoala route hit' );
//   //assemble object to send
//   var objectToSend={
//     response: 'from addKoala route'
//   }; //end objectToSend
//   //send info back to client
//   res.send( objectToSend );
// });
//
// // add koala
// app.post( '/editKoala', urlencodedParser, function( req, res ){
//   console.log( 'editKoala route hit' );
//   //assemble object to send
//   var objectToSend={
//     response: 'from editKoala route'
//   }; //end objectToSend
//   //send info back to client
//   res.send( objectToSend );
// });var express = require( 'express' );
// var app = express();
// var path = require( 'path' );
// var bodyParser= require( 'body-parser' );
// var urlencodedParser = bodyParser.urlencoded( {extended: false } );
// var port = process.env.PORT || 8080;
// // static folder
// app.use( express.static( 'public' ) );
//
// // spin up server
// app.listen( port, function(){
//   console.log( 'server up on', port );
// });
//
// // base url
// app.get( '/', function( req, res ){
//   console.log( 'base url hit' );
//   res.sendFile( 'index.html' );
// });
//
// // get koalas
// app.get( '/getKoalas', function( req, res ){
//   console.log( 'getKoalas route hit' );
//   //assemble object to send
//   var objectToSend={
//     response: 'from getKoalas route'
//   }; //end objectToSend
//   //send info back to client
//   res.send( objectToSend );
// });
//
// // add koala
// app.post( '/addKoala', urlencodedParser, function( req, res ){
//   console.log( 'addKoala route hit' );
//   //assemble object to send
//   var objectToSend={
//     response: 'from addKoala route'
//   }; //end objectToSend
//   //send info back to client
//   res.send( objectToSend );
// });
//
// // add koala
// app.post( '/editKoala', urlencodedParser, function( req, res ){
//   console.log( 'editKoala route hit' );
//   //assemble object to send
//   var objectToSend={
//     response: 'from editKoala route'
//   }; //end objectToSend
//   //send info back to client
//   res.send( objectToSend );
// });
