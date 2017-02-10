var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

// RECIPE SCHEMA
// we toss the (valid) object we get in here
var RecipeSchema = new mongoose.Schema({},{
  collection: 'Recipes'
});
var Recipe = mongoose.model('Recipe', RecipeSchema);

// LIST SCHEMA
// contains list's recipes. default listName is "default"
var ListSchema = new mongoose.Schema({
  user_id: String,
  listName: String,
  recipeList: [RecipeSchema]
}, {
  collection: 'Lists'
});
var List = mongoose.model('List', ListSchema);

// USER SCHEMA

var UserSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type:  String,
    required: true
  },
  preferences: {
    diet: [String],
    health: [String],
    blogs: [String]
  },
  saved: [ListSchema]
},{
  collection: 'Users'
});

UserSchema.set('toJSON', {
  transform: function(doc, ret, options){
    var returnJson = {
      id: ret._id,
      email: ret.email,
      name: ret.name
    }
    return returnJson;
  }
});

UserSchema.methods.authenticated = function(password){
  var user = this;
  var isAuthenticated = bcrypt.compareSync(password, user.password);
  return isAuthenticated ? user : false;
}

UserSchema.pre('save', function(next){
  if(!this.isModified('password')){
    // if password not changed, do nothing:
    next();
  } else{
    // if password modified, hash it:
    this.password = bcrypt.hashSync(this.password, 10);
    next();
  }
})

var User = mongoose.model('User', UserSchema);


// EXPORTS

module.exports = {
  Recipe: Recipe,
  List: List,
  User: User
};
