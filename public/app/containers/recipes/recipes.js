angular.module('App')
.component('recipesComp', {
  templateUrl: 'app/containers/recipes/recipes.html',
  controller: RecipesCompCtrl,
  controllerAs: 'recipesComp',
});

function RecipesCompCtrl($state, $scope, $timeout, $window, $location, DataServices, Auth){
  var recipesComp = this;
  recipesComp.DataServices = DataServices;
  recipesComp.user = Auth.currentUser();
  recipesComp.DataServices = DataServices;
  recipesComp.savedRecipes = [];

  if(recipesComp.user){
    recipesComp.DataServices.getRecipes().then(function(data){
      recipesComp.savedRecipes = data;
    })
  }

  DataServices.getRecipeDetails($state.params.id).then(function(data){
    recipesComp.result = data.data[0];
  })

  recipesComp.addRecipe = function(recipe){
    DataServices.addRecipe(recipe).then(function(data){
      recipesComp.savedRecipes = data;
    })
  }

  recipesComp.deleteRecipe = function(recipe){
    DataServices.deleteRecipe(recipe).then(function(data){
      recipesComp.savedRecipes = data;
    })
  }

}

RecipesCompCtrl.$inject = ['$state', '$scope', '$timeout', '$window', '$location', 'DataServices', 'Auth']
