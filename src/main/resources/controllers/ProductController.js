app.controller("ProductController", function($scope,$http) {
	
	$scope.filters = { };
  
    $http.get("../json/CategoryConfig.json").success( function(response) {
       $scope.prodcategories = response; 
    });
    
    $http.get("../json/ProductConfig.json").success( function(response) {
        $scope.products = response; 
     });
 });