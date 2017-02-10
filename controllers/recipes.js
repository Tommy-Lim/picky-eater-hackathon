var express = require('express');
var router = express.Router();
var models = require('../models/schemas');
var mongoose = require('mongoose');
var request = require('request');

router.route('/search/:query')
.get(function(req, res) {
  var url = "https://api.edamam.com/search?q=" + req.params.query;
  request.get(url, function(error, response, body) {
    // var results = JSON.parse(body);
    res.send(body);
  })
});

router.route('/show/:id')
.get(function(req, res) {
  var url = "http://dev.markitondemand.com/MODApis/Api/v2/Quote/json?symbol=" + req.params.id;
  request.get(url, function(error, response, body) {
    // var results = JSON.parse(body);
    res.send(body);
  })
});

module.exports = router;
