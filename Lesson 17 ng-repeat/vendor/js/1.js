var app = angular.module('myApp', []);

app.controller('MyController', function($scope){
	$scope.data = [
		{
			name : 'Duy Anh',
			year : 1992
		},
		{
			name : 'Rooney',
			year : 1986
		},
		{
			name : 'Carrick',
			year : 1982
		},
	];
});