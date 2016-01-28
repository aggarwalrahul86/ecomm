app.controller("ProductController", function($scope,$http,filters) {
	
	 $scope.filters = filters; 
	
    $http.get("../json/CategoryConfig.json").success( function(response) {
       $scope.prodcategories = response; 
    });
    
    $http.get("../json/ProductConfig.json").success( function(response) {
        $scope.products = response; 
     });
 });