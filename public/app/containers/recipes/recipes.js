angular.module('App')
.component('recipeComp', {
  templateUrl: 'app/containers/recipe/recipe.html',
  controller: RecipeCompCtrl,
  controllerAs: 'recipeComp',
});

function RecipeCompCtrl($state, $timeout, $window, $location, DataServices, Auth){
  var recipeComp = this;

}

RecipeCompCtrl.$inject = ['$state', '$timeout', '$window', '$location', 'DataServices', 'Auth']
