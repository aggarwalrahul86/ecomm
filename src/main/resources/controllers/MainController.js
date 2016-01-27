app.controller("MainController", function($scope,$http) {
  
    $http.get("CategoryConfig.json").success( function(response) {
       $scope.categories = response; 
    });
 });