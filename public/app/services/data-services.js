angular.module('App')
.service('DataServices', DataServices);

function DataServices($http, $window, $location){

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
      $window.alerts.push({msg: 'Sorry, Database error. Please wait and try again.', type: 'danger'});
      $location.path('/');
    })
  }

  this.addRecipe = function(uri){
    var req = {
      url: '/api/users/recipes/' + uri,
      method: 'POST'
    }
    return $http(req).then(function success(res){
      return res.data.recipes;
    }, function failure(res){
      $window.alerts.push({msg: 'Sorry, couldn\'t add recipe. Please wait and try again.', type: 'danger'});
      $location.path('/');
    })
  }


}

DataServices.$inject = ['$http', '$window', '$location'];
