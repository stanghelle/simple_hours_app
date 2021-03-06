angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.info', {
    url: '/info',
    views: {
      'tab1': {
        templateUrl: 'templates/info.html',
        controller: 'infoCtrl'
      }
    }
  })

  .state('tabsController.omSimpleHours', {
    url: '/om_sh',
    views: {
      'tab2': {
        templateUrl: 'templates/omSimpleHours.html',
        controller: 'omSimpleHoursCtrl'
      }
    }
  })

  .state('tabsController.cloudTabDefaultPage', {
    url: '/cloud',
    views: {
      'tab3': {
        templateUrl: 'templates/cloudTabDefaultPage.html',
        controller: 'cloudTabDefaultPageCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/page1/info')

  

});