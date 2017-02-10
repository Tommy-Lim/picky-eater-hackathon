var express = require('express');
var router = express.Router();
var models = require('../models/schemas');
var mongoose = require('mongoose');
var request = require('request');

router.route('/')
.get(function(req, res) {
  res.send("success")
});

module.exports = router;
