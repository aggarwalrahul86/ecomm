app.controller("MainController", function($scope,$http) {
	
	$scope.title = "Frame your Memories";
	
	$scope.filters = { };
  
    $http.get("../json/CategoryConfig.json").success( function(response) {
       $scope.categories = response; 
    });
    
    $http.get("../json/ProductConfig.json").success( function(response) {
        $scope.products = response; 
     });
 });