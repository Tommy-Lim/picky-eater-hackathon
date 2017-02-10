var express = require('express');
var router = express.Router();
var models = require('../models/schemas');
var mongoose = require('mongoose');
var request = require('request');

router.route('/search/:query')
.get(function(req, res) {
  var url = "https://api.edamam.com/search?q=" + req.params.query+ "&app_id=" + process.env.APP_ID +"&app_key="+ process.env.APP_KEY;
  request.get(url, function(error, response, data) {
    var data = JSON.parse(data);
    data.params = {}
    res.send(data);
  })
});

router.route('/show/:id')
.get(function(req, res) {

  // TODO: goes to database and finds recipe

});

module.exports = router;
