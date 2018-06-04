var app = angular.module('myApp', []);

app.controller('MyController', function($scope){
	$scope.data = [
		{
			name : 'Duy Anh',
			year : 1992,
			club : 'L14'
		},
		{
			name : 'Rooney',
			year : 1986,
			club : 'Everton'
		},
		{
			name : 'Carrick',
			year : 1982,
			club : 'Mu'
		},
	];

	//$scope.display = true;

	$scope.changeDisplay = function(item){
		item.display = !item.display;
	};
});