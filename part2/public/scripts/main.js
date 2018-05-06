/* eslint-disable no-unused-vars */

const app = angular.module('weddingWebApp', [
  'ui.router',
])
  .config(($stateProvider) => {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'scripts/home/home.html',
        controller: 'homeController',
        data: {},
      });
  })
  .run(($state) => {
    $state.go('home');
  });
