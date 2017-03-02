angular.module('App')
.component('profileComp', {
  templateUrl: 'app/containers/profile/profile.html',
  controller: ProfileCompCtrl,
  controllerAs: 'profileComp'
});

function ProfileCompCtrl($state, $window, DataServices, Auth){
  var profileComp = this;
  profileComp.user = Auth.currentUser();
  console.log(profileComp.user);

  DataServices.getRecipes().then(function(data){
    console.log("RECIPES:", data);
  })

}

ProfileCompCtrl.$inject = ['$state', '$window', 'DataServices', 'Auth'];
