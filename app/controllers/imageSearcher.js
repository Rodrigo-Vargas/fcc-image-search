'use strict';

var request = require('request');

var apiKey = process.env.API_KEY;
var csiKey = process.env.CSI_KEY;

function imageSearcher () {
  this.getImages = function(req, res){
    var query = req.params.query;
    var url = "https://www.googleapis.com/customsearch/v1?key=" 
              + apiKey 
              + "&cx=" +  csiKey
              + "&searchType=image"
              + "&q=" + query
              + "&num=10";
    
    var offset = req.query.offset;
    var start;
    if (typeof offset != 'undefined')
      start = (offset - 1) * 10 + 1;
    else
      start = 1;

    url += "&start=" + start;

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