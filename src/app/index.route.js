(function() {
  'use strict';

  angular
    .module('2')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      // .state('home', {
      //   url: '/',
      //   templateUrl: 'app/main/main.html',
      //   controller: 'MainController',
      //   controllerAs: 'main'
      // })
      .state('test', {
        url: '/test',
        templateUrl: 'app/main/test.html',
        controller: 'apCtrl'//,
        // controllerAs: 'main'
      })
      .state('register', {
        url: '/register',
        templateUrl: 'app/main/register.html',
        controller: 'apCtrl'//,
        // controllerAs: 'main'
      })
      .state('home', {
        url: '/',
        templateUrl: 'app/main/home.html',
        controller: 'apCtrl'//,
        // controllerAs: 'main'
      });


    $urlRouterProvider.otherwise('/');
  }

})();
