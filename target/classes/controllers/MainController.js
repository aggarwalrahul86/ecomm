app.controller("MainController", function($scope,$http,filters) {
	
	$scope.title = "Frame your Memories";
	$scope.filters = filters;
	
    $http.get("../json/CategoryConfig.json").success( function(response) {
       $scope.categories = response; 
    });
    
 });