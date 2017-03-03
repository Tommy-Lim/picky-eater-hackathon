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
router.route('/recipes')
.post(function(req, res){
  console.log("REQ", req.body);
  models.User.findOne({
    email: req.user.email
  }, function(err, user){
    if(!user){
      console.log("user not found");
    } else{
      user.recipes.push(req.body);
      user.save();
      res.send({
        recipes: user.recipes
      });
    }
  })
})
router.route('/recipes/:uri')
.delete(function(req, res){
  models.User.findOne({
    email: req.user.email
  }, function(err, user){
    if(!user){
      console.log("user not found");
    } else{
      user.recipes.forEach(function(recipe, index){
        if(recipe.uri == req.params.uri){
          user.recipes.splice(index, 1);
        }
      })
      user.save();
      res.send({
        recipes: user.recipes
      });
    }
  })
})

module.exports = router;
