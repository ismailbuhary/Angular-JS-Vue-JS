angular.module('demoApp')
.controller('demoControl',function($scope){
	$scope.colors = ['blue','green','red','magenta','cyan','darkolivegreen'];

	$scope.num = 3;
	$scope.deleteCircle = function(i){
		$scope.colors.splice(i,1)
	};

	$scope.addCircle = function(){
		$scope.colors.push($scope.c);
		$scope.c = "";
	}

});