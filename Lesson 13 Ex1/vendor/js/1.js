var app = angular.module('myApp', []);

app.controller('MyController', function($scope){
	$scope.text = 'Duy Anh';
	$scope.show = true;
	
	$scope.changeShow = function(){
		$scope.show = !$scope.show;
	}
});