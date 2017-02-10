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

  profileComp.preferences = DataServices.getUserPreferences(profileComp.user.id);
  console.log(profileComp.preferences)
  profileComp.lists = DataServices.getUserLists(profileComp.user.id)
  console.log(profileComp.lists)

  profileComp.defaultList = DataServices.getRecipeList(profileComp.user.id, "default")
  console.log(profileComp.defaultList)

}

ProfileCompCtrl.$inject = ['$state', '$window', 'DataServices', 'Auth'];
