var App = angular.module('demoApp',[]);


App.controller('demoControl',function($scope,$http){
	$scope.customers = [];

	$scope.deleteCustomer = function(id){
		var i = getIndex(id);
		$scope.customers.splice(i,1);
	};


	function getIndex(id){
		var index = -1;
		for(var i = 0;i<$scope.customers.length;i++){
			if($scope.customers[i].id === id){
				index = i;
				break;
			}
		}
		return index;
	}
	$http.get('scripts/data.json')
	.success(function(resp){
		$scope.customers = resp;
	})
});


App.filter('capital',function(){
	return function(input){
		var tempStr = input;
		tempStr = tempStr.split('').reverse().join('');
		return tempStr;
	};
});






