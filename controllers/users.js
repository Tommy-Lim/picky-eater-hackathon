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
      });
    }
  });
});

// GET - GET USER DATA
// assumes incoming req contains user._id
router.route('/')
.get(function(req, res) {
  models.User.findOne({_id: req.user._id}, function(err, user){
    if(!user){
      res.send({msg: "no user found"});
    } else {
      res.send({user});
    }
  });
});

// GET - GET USER PREFERENCES
router.route('/preferences')
.get(function(req, res) {
  models.User.findOne({
    _id: "589e1d54500dcc82082dc53c"
  }, function(err, user) {
    if(!user) {
      console.log("no user found");
    } else {
      if(user.preferences.length <= 0){
        res.send({msg: "user set no search preferences"});
      } else {
        res.send(user.preferences);
      }
    }
  });
})
.post(function(req, res){ // ADD STRING TO PREFERENCES DIET/HEALTH/BLOG ARRAY
  models.User.findOne({ // {diet: [string], health: [string], blog: [string]}
    _id: req.user._id
  }, function(err, user) {
    if(!user) {
      console.log("no user found");
    } else {
      for (var key in req.preferences) {
        user.preferences[key].concat(req.preferences[key]);
        user.preferences[key] = user.preferences[key].filter(function(elem, index, self) {
            return index == self.indexOf(elem);
        });
      }
    }
  })
});

// GET - GET USER SAVED LISTS
router.route('/lists')
.get(function(req, res) {

  models.User.findOne({
    _id: req.user._id
  }, function(err, user) {
    if(!user) {
      console.log("no user found");
    } else {
      if(user.saved.length <= 0){
        res.send({msg: "user did not create a list or saved a recipe yet"});
      } else {
        res.send(user.saved);
      }
    }
  });

});

// GET - GET A SPECIFIC LIST BY USER
// assumes req contains user._id
// would sort of prefer by id but by name probably looks easier on the eyes
router.route('/lists/:listName')
.get(function(req, res) {

  models.List.findOne({
    user_id: req.user._id,
    listName: req.params.listName
  }, function(err, list){
    if(!list) {
      res.send({msg: "no such list exists for user"});
    } else {
      res.send({list});
    }
  });

})
.post(function(req, res) { // assumes req contains user._id, list identifier data (name or _id), and recipe object

  models.User.findOne({ // look for the user by _id
    _id: req.user._id
  }), function(err, user) {
    if(!user) {
      res.send({msg: "what user?"});
    } else { // if the user exists
      models.List.findOne({ // look for an existing list of the same name by the user
        user_id: user._id,
        listName: req.params.listName // make sure we don't have redundant list names
      }, function(err, list){
        if(!list) { // if list does not exist, create one?
          models.List.create({
              user_id: user._id,
              listName: req.params.listName,
              recipeList: [req.recipe] // and add the recipe object to it
          }, function(err, created) {
              console.log("list created: ", created);
              user.saved.push(created);
              user.save();
          });
        } else { // the list exists, so push the recipe object to its recipeList array
          list.recipeList.push(req.recipe);
          list.save();
        }
      });
    }
  }

});


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
  });

});

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
  });

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
  });

});


module.exports = router;
