app.service('productService', function($http){	
	
	this.getProductCategories = function(){
		return $http.get("../json/CategoryConfig.json");
	};
	
});

