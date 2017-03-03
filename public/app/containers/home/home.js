angular.module('App')
.component('homeComp', {
  templateUrl: 'app/containers/home/home.html',
  controller: HomeCompCtrl,
  controllerAs: 'homeComp'
});

function HomeCompCtrl($interval, $state, DataServices, AuthServices, Auth){
  var homeComp = this;
  homeComp.DataServices = DataServices;
  homeComp.user = Auth.currentUser();

  homeComp.query = "salads";

  if(homeComp.user){
    homeComp.DataServices.getRecipes().then(function(data){
      homeComp.savedRecipes = data;
    })
  }

  homeComp.search = function() {
    $state.go('searchState', {query: homeComp.query})
  }

  DataServices.searchRecipes(homeComp.query).then(function(data){
    homeComp.results = data.data;
  })

  homeComp.addRecipe = function(recipe){
    DataServices.addRecipe(recipe).then(function(data){
      homeComp.savedRecipes = data;
    })
  }

  homeComp.deleteRecipe = function(uri){
    DataServices.deleteRecipe(uri).then(function(data){
      homeComp.savedRecipes = data;
    })
  }


}

HomeCompCtrl.$inject = ['$interval','$state', 'DataServices', 'AuthServices', 'Auth'];
