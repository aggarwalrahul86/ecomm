app.service('productService', function($http){	
	
	this.getProductCategories = function(){
		return $http.get("../json/CategoryConfig.json");
	};
	
	this.getProducts = function(){
		return $http.get("../json/ProductConfig.json");
	};
	
	this.getProductbyId = function(productId){
		var productsArray = [];
		var product = {};
		$http.get("../json/ProductConfig.json").success(function(data){
			productsArray = data;
			
			productsArray.forEach(function(obj) {
				console.log(obj.id);
				if(obj.id == productId ){
					 console.log(obj.id);
					 product = obj;
					 return product			 
				 }
				
			});
			
/*			for(var i = 0; i < productsArray.length; i++) {
			    var obj = productsArray[i];
				 if(obj.id == productId ){
					 console.log(obj.id);
					 return obj			 
				 }	
			}*/
			
			
			
		});
	};
	
});

