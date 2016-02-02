'use strict';

//var ClickHandler = require(process.cwd() + '/app/controllers/clickHandler.server.js');

var ImageSearcher = require(process.cwd() + '/app/controllers/imageSearcher.js');

module.exports = function (app, db) {
   app.route('/')
    .get(function (req, res) {
      res.sendFile(process.cwd() + '/public/index.html');
    });

  app.route('/:query')
    .get(function (req, res){
      var imageSearcher = new ImageSearcher(req, res);
      imageSearcher.getImages();
    });
};
