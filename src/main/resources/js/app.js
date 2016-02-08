var app = angular.module("myapp", [ 'ngRoute','angulike','imageZoomApp']);
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
	when('/detail/:productID', {
		templateUrl : 'detail.html',
		controller : 'ProductDetailController'
	}).

	otherwise({
		redirectTo : '/Home'
	});
} ]);

app.factory('filters', function() {
	return {
		category : '',
		color : '',
		price : ''
	};
});

app.directive('onFinishRender', function($timeout) {
	return {
		restrict : 'A',
		link : function(scope, element, attr) {
			if (scope.$last === true) {
				$timeout(function() {
					scope.$emit('ngRepeatFinished');
				});
			}
		}
	}
});


/*
 * app.directive('carouselDirective', function() { return function(scope,
 * element, attrs) { console.log('ROW: index = ', scope.$index);
 * scope.$watch('$last',function(v){ carou });
 *  }; })
 */

app.filter('paginate', function(Paginator) {
    return function(input, rowsPerPage) {
        if (!input) {
            return input;
        }

        if (rowsPerPage) {
            Paginator.rowsPerPage = rowsPerPage;
        }
        
        Paginator.itemCount = input.length;

        return input.slice(parseInt(Paginator.page * Paginator.rowsPerPage), parseInt((Paginator.page + 1) * Paginator.rowsPerPage + 1) - 1);
    }

})

.filter('forLoop', function() {
    return function(input, start, end) {
        input = new Array(end - start);
        for (var i = 0; start < end; start++, i++) {
            input[i] = start;
        }

        return input;
    }
})


.service('Paginator', function ($rootScope) {
    this.page = 0;
    this.rowsPerPage = 50;
    this.itemCount = 0;
    this.limitPerPage = 5;

    this.setPage = function (page) {
        if (page > this.pageCount()) {
            return;
        }

        this.page = page;
    };

    this.nextPage = function () {
        if (this.isLastPage()) {
            return;
        }

        this.page++;
    };

    this.perviousPage = function () {
        if (this.isFirstPage()) {
            return;
        }

        this.page--;
    };

    this.firstPage = function () {
        this.page = 0;
    };

    this.lastPage = function () {
        this.page = this.pageCount() - 1;
    };

    this.isFirstPage = function () {
        return this.page == 0;
    };

    this.isLastPage = function () {
        return this.page == this.pageCount() - 1;
    };

    this.pageCount = function () {
        return Math.ceil(parseInt(this.itemCount) / parseInt(this.rowsPerPage));
    };
    
    this.lowerLimit = function() { 
        var pageCountLimitPerPageDiff = this.pageCount() - this.limitPerPage;
        
        if (pageCountLimitPerPageDiff < 0) { 
            return 0; 
        }
        
        if (this.page > pageCountLimitPerPageDiff + 1) { 
            return pageCountLimitPerPageDiff; 
        } 
        
        var low = this.page - (Math.ceil(this.limitPerPage/2) - 1); 
        
        return Math.max(low, 0);
    };
})

.directive('paginator', function factory() {
    return {
        restrict:'E',
        controller: function ($scope, Paginator) {
            $scope.paginator = Paginator;
        },
        templateUrl: 'paginationControl.html'
    };
});




