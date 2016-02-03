app.controller("ProductController", function($scope,$http,filters) {
	
	$scope.filters = filters; 
	
    $http.get("../json/CategoryConfig.json").success( function(response) {
       $scope.prodcategories = response; 
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
         console.log("visibility is"+ $('.product-slider .item').css('visibility'));
    });
 
    
 });