angular.module('App')
.component('recipesComp', {
  templateUrl: 'app/containers/recipes/recipes.html',
  controller: RecipesCompCtrl,
  controllerAs: 'recipesComp',
});

function RecipesCompCtrl($state, $timeout, $window, $location, DataServices, Auth){
  var recipesComp = this;

  DataServices.getRecipeDetails($state.params.id).then(function(data){
    recipesComp.result = data.data[0];
    console.log("recipe: ", recipesComp.result)
  })

}

RecipesCompCtrl.$inject = ['$state', '$timeout', '$window', '$location', 'DataServices', 'Auth']
