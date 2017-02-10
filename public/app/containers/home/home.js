angular.module('App')
.component('homeComp', {
  templateUrl: 'app/containers/home/home.html',
  controller: HomeCompCtrl,
  controllerAs: 'homeComp'
});

function HomeCompCtrl($interval, DataServices, AuthServices, Auth){
  var homeComp = this;

}

HomeCompCtrl.$inject = ['$interval', 'DataServices', 'AuthServices', 'Auth'];