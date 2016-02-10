app.controller("ProductController", function($scope,$http,filters,productService,$location) {
	
	$scope.filters = filters;
	$scope.rowsPerPage = 50;
	
	$scope.categories = productService.getProductCategories().success(
			function(response) {
				$scope.categories = response;
			});
	
	$scope.colors = productService.getProductColors().success(
			function(response) {
				$scope.colors = response.colors;
			});
	
	$scope.colorFilter=function(categoryName){		
		
		if (filters.category == '' && categoryName == ''){
			
			$scope.colors = productService.getProductColors().success(
					function(response) {
						$scope.colors = response.colors;
			});
			
		}else{
			
			$scope.colorFilter = productService.getFilterCountbyCategory(categoryName,'color', function(colorFilter) {
				$scope.colorFilter = colorFilter;
			});
			
		}
	            
	    }
	
	
	$scope.viewDetails=function(param){			
	       $location.path("/detail/"+param)       
	    }
    
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