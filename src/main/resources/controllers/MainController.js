app.controller("MainController", function($scope,$http) {
	
	$scope.title = "Frame your Memories";
	
    $http.get("../json/CategoryConfig.json").success( function(response) {
       $scope.categories = response; 
    });
    
 });