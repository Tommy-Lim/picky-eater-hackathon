angular.module('App')
.component('profileComp', {
  templateUrl: 'app/containers/profile/profile.html',
  controller: ProfileCompCtrl,
  controllerAs: 'profileComp'
});

function ProfileCompCtrl($state, $window, DataServices){
  var profileComp = this;


}

ProfileCompCtrl.$inject = ['$state', '$window', 'DataServices'];
