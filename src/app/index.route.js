(function() {
  'use strict';

  angular
    .module('2')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('test', {
        url: '/test',
        templateUrl: 'app/main/test.html',
        controller: 'AppController'
      })
      .state('register', {
        url: '/register',
        templateUrl: 'app/main/register.html',
        controller: 'app'
      })
      .state('home', {
        url: '/',
        templateUrl: 'app/main/home.html',
        controller: 'app'
      });
    $urlRouterProvider.otherwise('/');
  }

})();
