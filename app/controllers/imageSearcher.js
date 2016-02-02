'use strict';

var request = require('request');
var config = require(process.cwd() + '/config');

function imageSearcher (req, res) {
  var req = req;
  var req = req;

  this.getImages = function(){
    var query = req.params.query;
    var url = "https://www.googleapis.com/customsearch/v1?key=" 
              + config.API_KEY 
              + "&cx=" +  config.CSI_KEY
              + "&searchType=image"
              + "&q=" + query;
    

    request(url, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        var jsonResponse = JSON.parse(body);

        var responseItems = [];


        jsonResponse.items.forEach(function(item){
          responseItems.push({
                              'url' : item.link, 
                              'alt' : item.snippet, 
                              'page_url' : item.image.contextLink 
                            });
        });

        res.json(responseItems); 
      }
    });
  }
}

module.exports = imageSearcher;