angular.module('App')
.component('homeComp', {
  templateUrl: 'app/containers/home/home.html',
  controller: HomeCompCtrl,
  controllerAs: 'homeComp'
});

function HomeCompCtrl($interval, $state, DataServices, AuthServices, Auth){
  var homeComp = this;

  homeComp.query = "salads";
  homeComp.DataServices = DataServices;

  homeComp.search = function() {
    $state.go('searchState', {query: homeComp.query})
  }

  DataServices.searchRecipes(homeComp.query).then(function(data){
    homeComp.results = data.data;
    console.log("searchComp.results: ", homeComp.results)
  })


}

HomeCompCtrl.$inject = ['$interval','$state', 'DataServices', 'AuthServices', 'Auth'];
