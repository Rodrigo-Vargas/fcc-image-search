'use strict';

var ImageSearcher = require(process.cwd() + '/app/controllers/imageSearcher.js');
var QueryHandler = require(process.cwd() + '/app/controllers/queryHandler.js');

module.exports = function (app, db) {
  var imageSearcher = new ImageSearcher();
  var queryHandler = new QueryHandler(db);

  app.route('/')
    .get(function (req, res) {
      res.sendFile(process.cwd() + '/public/index.html');
    });

  app.route('/latest/searchs')
    .get(queryHandler.getLatest)

  app.route('/search/:query')
    .get(function (req, res){
      queryHandler.addQuery(req, res);      
      imageSearcher.getImages(req, res);
    });
};
