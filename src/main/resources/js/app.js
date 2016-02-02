var app = angular.module("myapp", ['ngRoute']);
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
	    .when('/Home', {
	      templateUrl: 'HomePage.html',
	      controller: 'ProductController'
	   }).
	   
	   when('/Contact', {
	      templateUrl: 'contact.html',
	      controller: 'ContactController'
	   }).
	   
	   otherwise({
	      redirectTo: '/Home'
	   });
}]);

app.factory('filters', function () {
    return { category: '' };
});


