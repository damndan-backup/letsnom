// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider


.state('tab-dash2', {
  url: '/tab-dash2',
  templateUrl: 'templates/tab-dash2.html'
})

.state('tab-dash3', {
  url: '/tab-dash3',
  templateUrl: 'templates/tab-dash3.html'
})

.state('tab-dash4', {
  url: '/tab-dash4',
  templateUrl: 'templates/tab-dash4.html'
})

.state('makeevent', {
  url: '/makeevent',
  templateUrl: 'templates/makeevent.html'
})

.state('makeevent2', {
  url: '/makeevent2',
  templateUrl: 'templates/makeevent2.html'
})

.state('makeevent3', {
  url: '/makeevent3',
  templateUrl: 'templates/makeevent3.html'
})

.state('makeevent4', {
  url: '/makeevent4',
  templateUrl: 'templates/makeevent4.html'
})

.state('friendslist', {
  url: '/friendslist',
  templateUrl: 'templates/friendslist.html'
})

.state('friendslist2', {
  url: '/friendslist2',
  templateUrl: 'templates/friendslist2.html'
})

.state('friendslist3', {
  url: '/friendslist3',
  templateUrl: 'templates/friendslist3.html'
})

.state('friendslist4', {
  url: '/friendslist4',
  templateUrl: 'templates/friendslist4.html'
})


.state('incomplete247', {
  url: '/incomplete247',
  templateUrl: 'templates/incomplete247.html'
})

.state('waitingpolitics', {
  url: '/waitingpolitics',
  templateUrl: 'templates/waitingpolitics.html'
})

.state('waitingpolitics2', {
  url: '/waitingpolitics2',
  templateUrl: 'templates/waitingpolitics2.html'
})

.state('waitingpolitics3', {
  url: '/waitingpolitics3',
  templateUrl: 'templates/waitingpolitics3.html'
})

.state('waitingpolitics4', {
  url: '/waitingpolitics4',
  templateUrl: 'templates/waitingpolitics4.html'
})



.state('waiting247', {
  url: '/waiting247',
  templateUrl: 'templates/waiting247.html'
})

.state('2waiting247', {
  url: '/2waiting247',
  templateUrl: 'templates/2waiting247.html'
})



.state('donecelebrity', {
  url: '/donecelebrity',
  templateUrl: 'templates/donecelebrity.html'
})

.state('donecelebrity2', {
  url: '/donecelebrity2',
  templateUrl: 'templates/donecelebrity2.html'
})

.state('donecelebrity3', {
  url: '/donecelebrity3',
  templateUrl: 'templates/donecelebrity3.html'
})

.state('donecelebrity4', {
  url: '/donecelebrity4',
  templateUrl: 'templates/donecelebrity4.html'
})

.state('doneceo', {
  url: '/doneceo',
  templateUrl: 'templates/doneceo.html'
})

.state('doneceo2', {
  url: '/doneceo2',
  templateUrl: 'templates/doneceo2.html'
})

.state('doneceo3', {
  url: '/doneceo3',
  templateUrl: 'templates/doneceo3.html'
})

.state('doneceo4', {
  url: '/doneceo4',
  templateUrl: 'templates/doneceo4.html'
})

.state('doneobama', {
  url: '/doneobama',
  templateUrl: 'templates/doneobama.html'
})

.state('doneobama2', {
  url: '/doneobama2',
  templateUrl: 'templates/doneobama2.html'
})

.state('doneobama3', {
  url: '/doneobama3',
  templateUrl: 'templates/doneobama3.html'
})

.state('doneobama4', {
  url: '/doneobama4',
  templateUrl: 'templates/doneobama4.html'
})




.state('nom', {
  url: '/nom',
  templateUrl: 'templates/nom.html'
})

.state('nom2', {
  url: '/nom2',
  templateUrl: 'templates/nom2.html'
})

.state('nom3', {
  url: '/nom3',
  templateUrl: 'templates/nom3.html'
})

.state('nom4', {
  url: '/nom4',
  templateUrl: 'templates/nom4.html'
})

.state('nom5', {
  url: '/nom5',
  templateUrl: 'templates/nom5.html'
})



.state('2nom', {
  url: '/2nom',
  templateUrl: 'templates/2nom.html'
})

.state('2nom2', {
  url: '/2nom2',
  templateUrl: 'templates/2nom2.html'
})

.state('2nom3', {
  url: '/2nom3',
  templateUrl: 'templates/2nom3.html'
})

.state('2nom4', {
  url: '/2nom4',
  templateUrl: 'templates/2nom4.html'
})

.state('2nom5', {
  url: '/2nom5',
  templateUrl: 'templates/2nom5.html'
})


.state('3nom', {
  url: '/3nom',
  templateUrl: 'templates/3nom.html'
})

.state('3nom2', {
  url: '/3nom2',
  templateUrl: 'templates/3nom2.html'
})

.state('3nom3', {
  url: '/3nom3',
  templateUrl: 'templates/3nom3.html'
})

.state('3nom4', {
  url: '/3nom4',
  templateUrl: 'templates/3nom4.html'
})

.state('3nom5', {
  url: '/3nom5',
  templateUrl: 'templates/3nom5.html'
})


.state('4nom', {
  url: '/4nom',
  templateUrl: 'templates/4nom.html'
})

.state('4nom2', {
  url: '/4nom2',
  templateUrl: 'templates/4nom2.html'
})

.state('4nom3', {
  url: '/4nom3',
  templateUrl: 'templates/4nom3.html'
})

.state('4nom4', {
  url: '/4nom4',
  templateUrl: 'templates/4nom4.html'
})

.state('4nom5', {
  url: '/4nom5',
  templateUrl: 'templates/4nom5.html'
})


.state('5nom', {
  url: '/5nom',
  templateUrl: 'templates/5nom.html'
})

.state('5nom2', {
  url: '/5nom2',
  templateUrl: 'templates/5nom2.html'
})

.state('5nom3', {
  url: '/5nom3',
  templateUrl: 'templates/5nom3.html'
})

.state('5nom4', {
  url: '/5nom4',
  templateUrl: 'templates/5nom4.html'
})

.state('5nom5', {
  url: '/5nom5',
  templateUrl: 'templates/5nom5.html'
})




.state('schedule', {
  url: '/schedule',
  templateUrl: 'templates/schedule.html'
})

.state('schedule2', {
  url: '/schedule2',
  templateUrl: 'templates/schedule2.html'
})

.state('schedule3', {
  url: '/schedule3',
  templateUrl: 'templates/schedule3.html'
})

.state('schedule4', {
  url: '/schedule4',
  templateUrl: 'templates/schedule4.html'
})

.state('schedule5', {
  url: '/schedule5',
  templateUrl: 'templates/schedule5.html'
})




    // setup an abstract state for the tabs directive
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })

    // Each tab has its own nav history stack:

    .state('tab.dash', {
      url: '/dash',
      views: {
        'tab-dash': {
          templateUrl: 'templates/tab-dash.html',
          controller: 'DashCtrl'
        }
      }
    })

    .state('tab.friends', {
      url: '/friends',
      views: {
        'tab-friends': {
          templateUrl: 'templates/tab-friends.html',
          controller: 'FriendsCtrl'
        }
      }
    })
    .state('tab.friend-detail', {
      url: '/friend/:friendId',
      views: {
        'tab-friends': {
          templateUrl: 'templates/friend-detail.html',
          controller: 'FriendDetailCtrl'
        }
      }
    })

    .state('tab.account', {
      url: '/account',
      views: {
        'tab-account': {
          templateUrl: 'templates/tab-account.html',
          controller: 'AccountCtrl'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});

