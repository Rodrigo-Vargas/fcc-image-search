'use strict';

var express = require('express');
var mongo = require('mongodb');
var routes = require('./app/routes/index.js');

var app = express();

var mongoURL = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/image-search';

mongo.connect(mongoURL, function (err, db) {

   if (err) {
      throw new Error('Database failed to connect!');
   } else {
      console.log('Successfully connected to MongoDB on port 27017.');
   }

   app.use('/public', express.static(process.cwd() + '/public'));
   app.use('/controllers', express.static(process.cwd() + '/app/controllers'));

   routes(app, db);

   var port = process.env.PORT || 3000

   app.listen(port, function () {
      console.log('Node.js listening on port ' + port + '...');
   });
});
