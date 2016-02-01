'use strict';

var ClickHandler = require(process.cwd() + '/app/controllers/clickHandler.server.js');

module.exports = function (app, db) {
   var clickHandler = new ClickHandler(db);

   app.route('/')
      .get(function (req, res) {
         res.sendFile(process.cwd() + '/public/index.html');
      });

   //GET 

  app.route('/search')
    .get(function(req, res){
      var request = require('request');
      request('https://www.googleapis.com/customsearch/v1?key=API&cx=017576662512468239146:omuauf_lfve&q=lectures', function (error, response, body) {
        if (!error && response.statusCode == 200) {
          res.end(body) // Show the HTML for the Google homepage. 
        }
      })
    })

   app.route('/api/clicks')
      .get(clickHandler.getClicks)
      .post(clickHandler.addClick)
      .delete(clickHandler.resetClicks);
};
