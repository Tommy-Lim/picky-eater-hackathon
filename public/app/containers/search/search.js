angular.module('App')
.component('searchComp', {
  templateUrl: 'app/containers/search/search.html',
  controller: SearchCompCtrl,
  controllerAs: 'searchComp'
});

function SearchCompCtrl($state, DataServices, Auth){
  var searchComp = this;
  searchComp.DataServices = DataServices;
  searchComp.user = Auth.currentUser();
  searchComp.query = $state.params.query;

  if(searchComp.user){
    searchComp.DataServices.getRecipes().then(function(data){
      searchComp.savedRecipes = data;
    })
  }

  searchComp.DataServices.searchRecipes($state.params.query).then(function(data){
    searchComp.results = data.data;
  })

}

SearchCompCtrl.$inject = ['$state', 'DataServices', 'Auth'];
