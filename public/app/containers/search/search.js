angular.module('App')
.component('searchComp', {
  templateUrl: 'app/containers/search/search.html',
  controller: SearchCompCtrl,
  controllerAs: 'searchComp'
});


function SearchCompCtrl($state, DataServices){
  var searchComp = this;

}

SearchCompCtrl.$inject = ['$state', 'DataServices'];
