angular.module('App')
.service('DataServices', DataServices);

function DataServices($http, $state, $window, $location){

  // SEARCH FOR RECIPES
  this.searchRecipes = function(query) {
    var req = {
      url: '/api/recipes/search/' + query,
      method: "GET",
    }

    return $http(req).then(function success(res) {
      return res;
    }, function failure(res) {
      $window.alerts.push({msg: 'Sorry, Stock API request limit exceeded, please wait 1 min and try again', type: 'danger'});
      $location.path('/');
    });
  }

  // GET RECIPE DETAILS
  this.getRecipeDetails = function(id) {
    var req = {
      url: '/api/recipes/show/' + id,
      method: "GET",
    }

    return $http(req).then(function success(res) {
      return res;
    }, function failure(res) {
      $window.alerts.push({msg: 'Sorry, Stock API request limit exceeded, please wait 1 min and try again', type: 'danger'});
      $location.path('/');
    });
  }

  // GET USERS RECIPES
  this.getRecipes = function(){
    var req = {
      url: '/api/users/recipes',
      method: 'GET'
    }
    return $http(req).then(function success(res){
      return res.data.recipes.map(function(recipe){
        return JSON.parse(recipe);
      });
    }, function failure(res){
      $window.alerts.push({msg: 'Sorry, couldn\'t get recipes. Please wait and try again.', type: 'danger'});
      $location.path('/');
    })
  }

  this.addRecipe = function(uri){
    uri = encodeURIComponent(JSON.stringify(uri))
    var req = {
      url: '/api/users/recipes/' + uri,
      method: 'POST'
    }
    return $http(req).then(function success(res){
      return res.data.recipes;
    }, function failure(res){
      $window.alerts.push({msg: 'Sorry, couldn\'t add recipe.', type: 'danger'});
      $location.path('/');
    })
  }

  this.deleteRecipe = function(uri){
    console.log("deleting", uri)
    if($state.current.url == "/profile"){
      document.getElementById(uri.label).remove();
    }

    uri = encodeURIComponent(JSON.stringify(uri))
    var req = {
      url: '/api/users/recipes/' + uri,
      method: 'DELETE'
    }

    return $http(req).then(function success(res){
      return res.data.recipes;
    }, function failure(res){
      $window.alerts.push({msg: 'Sorry, couldn\'t delete recipe.', type: 'danger'});
      $location.path('/');
    })
  }

  this.isRecipeSaved = function(recipeURI, recipes){
    if(recipes.length > 0){
      recipes = recipes.map(function(recipe_obj){
        return recipe_obj.uri
      })
      console.log(recipes);
      console.log(recipeURI);
      if(recipes.indexOf(recipeURI)>=0){
        console.log(true);
        return true;
      } else{
        console.log(false);
        return false;
      }
    } else{
      return false;
    }
  }

}

DataServices.$inject = ['$http', '$state', '$window', '$location'];
