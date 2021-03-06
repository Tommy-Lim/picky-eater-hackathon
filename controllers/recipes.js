var express = require('express');
var router = express.Router();
var models = require('../models/schemas');
var mongoose = require('mongoose');
var request = require('request');

router.route('/search/:query')
.get(function(req, res) {
  var url = "https://api.edamam.com/search?q=" + req.params.query+ "&app_id=" + process.env.APP_ID +"&app_key="+ process.env.APP_KEY + "&to=100";
  request.get(url, function(error, response, data) {
    var data = JSON.parse(data);
    data.params = {}
    res.send(data);
  })
});

router.route('/show/:id')
.get(function(req, res) {
  var url = "https://api.edamam.com/search?r=http://www.edamam.com/ontologies/edamam.owl%23" + req.params.id+ "&app_id=" + process.env.APP_ID +"&app_key="+ process.env.APP_KEY;
  request.get(url, function(error, response, data) {
    var data = JSON.parse(data);
    data.params = {}
    res.send(data);
  })
});

module.exports = router;
