angular.module('App')
.component('searchComp', {
  templateUrl: 'app/containers/search/search.html',
  controller: SearchCompCtrl,
  controllerAs: 'searchComp'
});

function SearchCompCtrl($state, $scope, DataServices, Auth){
  var searchComp = this;
  searchComp.DataServices = DataServices;
  searchComp.user = Auth.currentUser();
  searchComp.query = $state.params.query;
  searchComp.selected = "12";

  searchComp.DataServices.searchRecipes($state.params.query).then(function(data){
    searchComp.results = data.data;
  })

  if(searchComp.user){
    searchComp.DataServices.getRecipes().then(function(data){
      searchComp.savedRecipes = data;
    })
  }

  searchComp.addRecipe = function(recipe){
    DataServices.addRecipe(recipe).then(function(data){
      searchComp.savedRecipes = data;
    })
  }

  searchComp.deleteRecipe = function(recipe){
    DataServices.deleteRecipe(recipe).then(function(data){
      searchComp.savedRecipes = data;
    })
  }

}

SearchCompCtrl.$inject = ['$state', '$scope', 'DataServices', 'Auth'];
