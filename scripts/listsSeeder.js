var models = require('../models/schemas');
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/pickyeater');

// CREATE SAVED LISTS

var listName1 = "beef"
var listName2 = "default"

var user1 = {
    email: "user1@email.com",
    password: "password"
}

var user2 = {
    email: "user2@email.com",
    password: "password"
}

function createList(newListName, userEmail) {
    console.log("going to create list", newListName, "for", userEmail); // ideally second param is user's _id
    models.User.findOne({
            'email': userEmail
        },
        function(err, user) {
            if (!user) {
                console.log("user not found")
            } else {
                console.log("user found:", user._id)
                models.List.findOne({
                        'user_id': user._id,
                        'listName': newListName
                    },
                    function(err, list) {
                        console.log("list error: ", err);
                        console.log("list found: ", list);
                        if (!list) { // if list does not exist
                          console.log("list not found. creating list", newListName)
                            models.List.create({
                                user_id: user._id,
                                listName: newListName,
                                recipeList: []
                            }, function(err, created) {
                                console.log("list created: ", created);
                                console.log(user.email, "'s saved lists':", user.saved)
                                user.saved.push(created);
                                user.save();
                            });
                        }
                    });
            }
        });
}
