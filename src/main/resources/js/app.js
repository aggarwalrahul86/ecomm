var app = angular.module("myapp", [ 'ngRoute' ]);
app.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/Home', {
		templateUrl : 'HomePage.html',
		controller : 'ProductController'
	}).

	when('/Contact', {
		templateUrl : 'contact.html',
		controller : 'ContactController'
	}).

	when('/category', {
		templateUrl : 'category.html',
		controller : 'ProductController'
	}).

	otherwise({
		redirectTo : '/Home'
	});
} ]);

app.factory('filters', function() {
	return {
		category : ''
	};
});

app.directive('onFinishRender', function ($timeout) {
return {
    restrict: 'A',
    link: function (scope, element, attr) {
        if (scope.$last === true) {
            $timeout(function () {
                scope.$emit('ngRepeatFinished');
            });
        }
    }
}
});
/*app.directive('carouselDirective', function() {
	  return function(scope, element, attrs) {
	    console.log('ROW: index = ', scope.$index);
	    scope.$watch('$last',function(v){
	      carou 
	    });
	    
	  };
	})*/