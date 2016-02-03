app.controller("MainController", function($scope, $http, filters,
		productService) {

	$scope.title = "Frame your Memories";
	$scope.filters = filters;

	$scope.categories = productService.getProductCategories().success(
			function(response) {
				$scope.categories = response;
			});

    $scope.myModel = {
            Url: 'http://jasonwatmore.com/post/2014/08/01/AngularJS-directives-for-social-sharing-buttons-Facebook-Like-GooglePlus-Twitter-and-Pinterest.aspx',
            Name: "Rahul", 
            ImageUrl: 'http://www.jasonwatmore.com/pics/jason.jpg'
        };
	
    $http.get("../json/CategoryConfig.json").success( function(response) {
       $scope.categories = response; 
    });
    
 });

