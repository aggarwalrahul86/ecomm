app.controller("MainController", function($scope, $http, filters,
		productService) {

	$scope.title = "Frame your Memories";
	$scope.filters = filters;

	$scope.categories = productService.getProductCategories().success(
			function(response) {
				$scope.categories = response;
			});

});