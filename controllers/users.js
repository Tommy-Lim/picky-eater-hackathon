var express = require('express');
var router = express.Router();
var models = require('../models/schemas');
var mongoose = require('mongoose');
var request = require('request');

// SIGN UP USER
router.route('/')
.post(function(req, res){
  models.User.findOne({email: req.body.email}, function(err, user){
    if(user){
      return res.status(400).send({message: "Email already exists"});
    } else{
      models.User.create(req.body, function(err, created){
        if(err){
          return res.status(500).send(err);
        } else{
          return res.send(user);
        }
      })
    }
  })
})

// GET USER RECIPES
router.route('/recipes')
.get(function(req, res){
  models.User.findOne({
    email: req.user.email
  }, function(err, user){
    if(!user){
      console.log("no user found");
    } else{
      if(!user.recipes){
        res.send({msg: "recipes empty", recipes: []});
      } else{
        res.send({recipes: user.recipes});
      }
    }
  })
})

// ADD AND DELETE RECIPES BASED ON URI
router.route('/recipes/:uri')
.post(function(req, res){
  models.User.findOne({
    email: req.user.email
  }, function(err, user){
    if(!user){
      console.log("user not found");
    } else{
      user.recipes.push(req.params.uri);
      user.save();
      res.send({
        recipes: user.recipes
      });
    }
  })
})
.delete(function(req, res){
  models.User.findOne({
    email: req.user.email
  }, function(err, user){
    if(!user){
      console.log("user not found");
    } else{
      console.log("before", user.recipes);
      user.recipes.splice(user.recipes.indexOf(req.params.uri), 1);
      console.log("after", user.recipes);
      user.save();
      res.send({
        msg: req.params.uri + " deleted from " + req.user.email + "'s recipes"
      });
    }
  })
})

module.exports = router;
