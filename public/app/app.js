angular.module('App', ['ui.router', 'ui.bootstrap'])
.config([
  '$stateProvider',
  '$urlRouterProvider',
  '$locationProvider',
  function(
    $stateProvider,
    $urlRouterProvider,
    $locationProvider
  ){
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);

    $stateProvider
    .state('homeState', {
      url: '/',
      component: 'homeComp'
    })
    .state('profileState', {
      url: '/profile',
      component: 'profileComp'
    })
    .state('authState', {
      url: '/auth',
      component: 'authComp'
    })
    .state('recipesState', {
      url: '/recipes/:id',
      component: 'recipesComp'
    })
    .state('searchState', {
      url: '/search/:query',
      component: 'searchComp'
    })
  }

])
.config(['$httpProvider', function($httpProvider) {
  $httpProvider.interceptors.push('AuthInterceptor');
}])
.run(['$transitions', '$window', function($transitions, $window){
  $window.alerts = [];
  $transitions.onStart({ to: 'profileState'}, function(trans){
    var Auth = trans.injector().get('Auth')
    if(!Auth.isLoggedIn()){
      $window.alerts.push({msg: 'Must be logged in to access', type: 'danger'});
      return trans.router.stateService.target('authState');
    }
  })
}])
.run(['$rootScope', '$state', '$stateParams', function($rootScope, $state, $stateParams){
    $rootScope.$state = $state;
}]);
