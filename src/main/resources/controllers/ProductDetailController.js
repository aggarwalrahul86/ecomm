app.controller("ProductDetailController", function($scope,$routeParams,productService) {
	
	$scope.scopeVar = $routeParams.productID;
	$scope.product = {};
	
	$scope.categories = productService.getProductCategories().success(
			function(response) {
				$scope.categories = response;
			});
	
/*	productService.getProductbyId($routeParams.productID).then(
			function(product) {
				$scope.product = product;
	});*/
	
	 productService.getProducts().success(function(productsArray){
			productsArray.forEach(function(obj) {
				if(obj.id == $routeParams.productID ){
					 product = obj;
					 $scope.product = product; 		 
				 }
			});
			
		});
	
	
    $scope.myModel = {
            Url: 'http://jasonwatmore.com/post/2014/08/01/AngularJS-directives-for-social-sharing-buttons-Facebook-Like-GooglePlus-Twitter-and-Pinterest.aspx',
            Name: "Rahul", 
            ImageUrl: 'http://www.jasonwatmore.com/pics/jason.jpg'
        };
	    
 });