'use strict';

angular.module('responymous', ['ngAnimate', 'ngCookies', 'ngTouch', 'ui.router', 'firebase'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/partials/main.html',
      controller: 'MainCtrl as app'
    })
    .state('student', {
      url: '/student',
      templateUrl: 'app/partials/student.html',
      controller: 'StudentCtrl as student'
    })
    .state('instructor', {
      url: '/instructor',
      templateUrl: 'app/partials/instructor.html',
      controller: 'InstructorCtrl as instructor'
    });

    $urlRouterProvider.otherwise('/');
  })
  .constant('CONFIG', {
    Firebase: {
      baseUrl: 'https://responymous-orl-fee.firebaseio.com'
    }
  })
;
