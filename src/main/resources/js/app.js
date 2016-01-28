var app = angular.module("myapp", ['ngRoute']);
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
	    .when('/Home', {
	      templateUrl: 'HomePage.html',
	      controller: 'MainController'
	   }).
	   
	   when('/Contact', {
	      templateUrl: 'ContactPage.html',
	      controller: 'ContactController'
	   }).
	   
	   otherwise({
	      redirectTo: '/Home'
	   });
}]);