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


  DataServices.getUserPreferences(profileComp.user.id).then(function(data) {
    profileComp.preferences = data.data;
    console.log(profileComp.preferences.blogs, profileComp.preferences.health, profileComp.preferences.diet)
  });

  DataServices.getUserLists(profileComp.user.id).then(function(data) {
    profileComp.lists = data.data;
    console.log(profileComp.lists[0].listName, profileComp.lists[0].recipeList)
  });
  
}

ProfileCompCtrl.$inject = ['$state', '$window', 'DataServices', 'Auth'];
