var models = require('../models/schemas');
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/pickyeater');

var dietLabels = [
    "balanced",
    "high-fiber",
    "high-protein",
    "low-carb",
    "low-fat",
    "low-sodium"
]
var healthLabels = [
    "alcohol-free",
    "celery-free",
    "crustacean-free",
    "dairy-free",
    "egg-free",
    "fish-free",
    "gluten-free",
    "kidney-friendly",
    "kosher",
    "low-potassium",
    "lupine-free",
    "mustard-free",
    "low-fat-abs",
    "No-oil-added",
    "low-sugar",
    "paleo",
    "peanut-free",
    "pecatarian",
    "pork-free",
    "red-meat-free",
    "sesame-free",
    "shellfish-free",
    "soy-free",
    "sugar-conscious",
    "tree-nut-free",
    "vegan",
    "vegetarian",
    "wheat-free",
]
var blogSources = [
    "Food & Wine",
    "Bon Appetit",
    "Food52",
    "Smitten Kitchen",
    "Martha Stewart",
    "Food & Wine",
    "101 Cookbooks",
    "NY Times",
    "The Kitchn",
    "Saveur",
    "Pioneer Woman",
    "Serious Eats",
    "BBC Good Food",
    "Epicurious",
    "Food Network",
    "Lottie + Doof",
    "Simply Recipes",
    "Jamie Oliver",
    "Fine Cooking",
    "Eating Well",
    "Honest Cooking",
    "Food Republic",
    "Joy the Baker",
    "Cooking Chanel",
    "Tasting Table",
    "Rawmazing",
    "PBS Food",
    "Donna Hay",
    "Real Simple",
    "Chocolate & Zucchini",
    "Good Housekeeping",
    "Leite’s Culnaria",
    "Sassy Radish",
    "Cookstr",
    "Self",
    "Cook’s Illustrated"
]

var user1 = {
    email: "user1@email.com",
    password: "password"
}

var user2 = {
    email: "user2@email.com",
    password: "password"
}

var prefObj1 = {
    diet: [randomPick(dietLabels), randomPick(dietLabels)],
    health: [randomPick(healthLabels), randomPick(healthLabels)],
    blogs: [randomPick(blogSources), randomPick(blogSources)]
}

var prefObj2 = {
    diet: [randomPick(dietLabels), randomPick(dietLabels)],
    health: [randomPick(healthLabels), randomPick(healthLabels)],
    blogs: [randomPick(blogSources), randomPick(blogSources)]
}

function randomPick(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function addPreferences(user, prefObj) {
    models.User.findOne({
        email: user.email
    }, function(err, user) {
        if (!user) {
            console.log("seriously, user not found?")
        } else {
            for (var key in prefObj) {
                prefObj[key].forEach(function(filter) {
                  user.preferences[key].push(filter)
                  user.save();
                });
                user.preferences[key] = user.preferences[key].filter(function(elem, index, self) {
                    return index == self.indexOf(elem);
                })
                user.save();
            }
        }
    });
}
console.log(prefObj1, prefObj2["health"])
addPreferences(user2, prefObj1);
addPreferences(user1, prefObj2);
