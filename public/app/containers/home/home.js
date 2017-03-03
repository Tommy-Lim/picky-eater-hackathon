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
    console.log("searchComp.results: ", homeComp.results)
  })

  homeComp.addRecipe = function(recipe){
    DataServices.addRecipe(recipe).then(function(data){
      homeComp.savedRecipes = data.map(function(item){
        return JSON.parse(item);
      })
    })
  }

  homeComp.deleteRecipe = function(recipe){
    DataServices.deleteRecipe(recipe).then(function(data){
      homeComp.savedRecipes = data.map(function(item){
        return JSON.parse(item);
      })
    })
  }


}

HomeCompCtrl.$inject = ['$interval','$state', 'DataServices', 'AuthServices', 'Auth'];
