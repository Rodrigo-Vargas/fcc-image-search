'use strict';

function queryHandler (db) {
  var querys = db.collection('querys');

  this.addQuery = function (req, res) {
    var insertObj = { 'query': req.params.query, 'date' : Date.now() }

    querys.insert(insertObj, function (err, result) {
       if (err) {
          throw err;
       }
    });
  };

  this.getLatest = function (req, res) {
    var queryProjection = { '_id': false };

    querys.find({}, queryProjection).sort( { date: -1 } ).toArray(function (err, result) {
      if (err) {
        console.log(err);
      } 

      res.json(result);
    });
  }
}

module.exports = queryHandler;