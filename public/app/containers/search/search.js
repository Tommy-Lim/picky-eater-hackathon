angular.module('App')
.component('searchComp', {
  templateUrl: 'app/containers/search/search.html',
  controller: SearchCompCtrl,
  controllerAs: 'searchComp'
});

function SearchCompCtrl($state, DataServices){
  var searchComp = this;

  console.log("query: ", $state.params.query)

  DataServices.searchRecipes($state.params.query).then(function(data){
    searchComp.results = data.data;
    console.log("searchComp.results: ", searchComp.results)
  })

}

SearchCompCtrl.$inject = ['$state', 'DataServices'];
