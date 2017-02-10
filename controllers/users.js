var express = require('express');
var router = express.Router();
var models = require('../models/schemas');
var mongoose = require('mongoose');
var request = require('request');

// Routes...


// POST - USER SIGN UP
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

// GET - GET USER WATCHLIST SYMBOLS
router.route('/watchlist')
.get(function(req, res){
  models.User.findOne({
    email: req.user.email
  }, function(err, user){
    if(!user){
      console.log("no user found");
    } else{
      if(!user.watchlist){
        res.send({msg: "watchlist empty", watchlist: []});
      } else{
        res.send({watchlist: user.watchlist});
      }
    }
  })

})

// POST - ADD SYMBOL TO USER WATCHLIST
// DELETE - REMOVE SYMBOL FROM USER WATCHLIST
router.route('/watch/:symbol')
.post(function(req, res){

  models.User.findOne({
    email: req.user.email
  }, function(err, user){
    if(!user){
      console.log("user not found");
    } else{
      user.watchlist.push(req.params.symbol);
      user.save();
      res.send({
        msg: req.params.symbol + " added to " + req.user.email + "'s watchlist"
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
      console.log("before", user.watchlist);
      user.watchlist.splice(user.watchlist.indexOf(req.params.symbol), 1);
      console.log("after", user.watchlist);
      user.save();
      res.send({
        msg: req.params.symbol + " deleted from " + req.user.email + "'s watchlist"
      });
    }
  })

})


module.exports = router;
