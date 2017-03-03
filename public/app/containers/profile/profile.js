angular.module('App')
.component('profileComp', {
  templateUrl: 'app/containers/profile/profile.html',
  controller: ProfileCompCtrl,
  controllerAs: 'profileComp'
});

function ProfileCompCtrl($state, $scope, $window, DataServices, Auth){
  var profileComp = this;
  profileComp.user = Auth.currentUser();
  profileComp.DataServices = DataServices;

  DataServices.getRecipes().then(function(data){
    profileComp.recipes = data;
  })

}

ProfileCompCtrl.$inject = ['$state', '$scope', '$window', 'DataServices', 'Auth'];
