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
      return res.data.recipes;
    }, function failure(res){
      $window.alerts.push({msg: 'Sorry, couldn\'t get recipes. Please wait and try again.', type: 'danger'});
      $location.path('/');
    })
  }

  this.addRecipe = function(recipe){
    var req = {
      url: '/api/users/recipes',
      method: 'POST',
      data: recipe
    }
    return $http(req).then(function success(res){
      $window.alerts.push({msg: 'Recipe added.', type: 'success'});
      return res.data.recipes;
    }, function failure(res){
      $window.alerts.push({msg: 'Sorry, couldn\'t add recipe.', type: 'danger'});
      $location.path('/');
    })
  }

  this.deleteRecipe = function(uri, label){
    if($state.current.url == "/profile"){
      document.getElementById(label).remove();
    }
    uri = encodeURIComponent(uri);
    var req = {
      url: '/api/users/recipes/' + uri,
      method: 'DELETE',
    }
    return $http(req).then(function success(res){
      $window.alerts.push({msg: 'Recipe removed.', type: 'success'});
      return res.data.recipes;
    }, function failure(res){
      $window.alerts.push({msg: 'Sorry, couldn\'t delete recipe.', type: 'danger'});
      $location.path('/');
    })
  }

  this.isRecipeSaved = function(recipeURI, recipes){
    if(recipes && recipes.length > 0){
      isSaved = false;
      recipes.forEach(function(recipe){
        if(recipe.uri == recipeURI){
          isSaved = true;
        }
      })
      return isSaved;
    } else{
      return false;
    }
  }

}

DataServices.$inject = ['$http', '$state', '$window', '$location'];
