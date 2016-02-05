app.controller("ProductController", function($scope,$http,filters,productService) {
	
	$scope.filters = filters;
	$scope.rowsPerPage = 50;
	
	$scope.categories = productService.getProductCategories().success(
			function(response) {
				$scope.categories = response;
			});
    
    $http.get("../json/ProductConfig.json").success( function(response) {
        $scope.products = response;
     });
    
    $scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent) {
    	 animations();
         productDetailGallery(4000);
         carousels();
         utils();
         demo();
    });
 
    
 });