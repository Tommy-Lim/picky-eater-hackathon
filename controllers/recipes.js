var express = require('express');
var router = express.Router();
var models = require('../models/schemas');
var mongoose = require('mongoose');
var request = require('request');


router.route('/')
.get(function(req, res) {
  var healthLabels = []; // ex) [], ["Alcohol-Free"], ["Alcohol-Free", "Paleo"]
  var dietLabels = ["High-Protein"]; // ex) [], ["High-Protein"], ["High-Protein", "Low-Carb"]

  var healthParam = "";
  healthLabels.forEach(function(filter) {
    healthParam += "&health=" + filter.toLowerCase();
  });

  var dietParam = "";
  dietLabels.forEach(function(filter) {
    dietParam += "&diet=" + filter.toLowerCase();
  });

  var url = "https://api.edamam.com/search"
    + "?app_id=" + process.env.APP_ID
    + "&app_key=" + process.env.APP_KEY
    + "&q=" + "chicken"
    + "&from=" + 0
    + "&to=" + 10
    + healthParam
    + dietParam;
    // + calorieParam;
    console.log(url)

  request.get(url, function(error, response, body) {
    // console.log(error)
    res.send(body);
  })
});

module.exports = router;
