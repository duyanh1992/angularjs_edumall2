var app = angular.module('myApp', []);

app.controller('MyController', function($scope){
	$scope.name = 'danger';
	
	$scope.changeBtn = function(){
		$scope.name = "primary";
	};
});