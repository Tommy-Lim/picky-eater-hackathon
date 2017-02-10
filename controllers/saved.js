var express = require('express');
var router = express.Router();
var models = require('../models/schemas');
var mongoose = require('mongoose');
var request = require('request');


// GET /:userID/saved
// return all recipes saved by user
router.route('/')
.get(function(req, res) {
  res.send("success")
});


// GET /:userID/saved/:recipeID
// return a recipe object saved by user


// GET /:userID/folders
// return all recipe folders belonging to user


// GET /:userID/folders/:folderID
// return all recipes in a folder belonging to user

module.exports = router;
