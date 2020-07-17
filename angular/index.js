const angular=require('./angular');
module.exports = angular;

var app= angular.module('main',['ngRoute']);

app.config(function ($routeProvider){
    $routeProvider.when('/',{
        templateUrl: './components/home.html',
        controller: 'homeCtrl'
    }).when('/',{
        templateUrl: './components/login.html',
        controller: 'loginCtrl'
    }).otherwise ({
        template: 404
    })

});
app.controller('homeCtrl', function ($scope){
    $scope.gotoSignup = function() {
        $location.path('/login');
    }
});

app.controller('homeCtrl', function ($scope){
      $scope.gotoSignup = function() {
          $location.path('/signup');
      }
});
app.controller('loginCtrl', function ($scope){
     $scope.submit = function() {
         var username = $scope.username;
         var password = $scope.password;
     }
})

