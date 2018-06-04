var app = angular.module('myApp', ['ngRoute'])

app.controller('MyController', function($scope){
	
});

app.config(function($routeProvider, $locationProvider){
	$routeProvider
	.when('/', {
		templateUrl : 'main.html',
		controller : 'MainController'
	})

	.when('/social', {
		templateUrl : 'social.html'
	})

	.when('/advertisement', {
		templateUrl : 'advertisement.html'
	})
	.otherwise({ redirectTo: '/' })
	
	$locationProvider.html5Mode(true);
});

app.controller('MainController', function($scope, $http){
	$http.get('1.json')
	.then(function(res){
		$scope.data = res.data;
		//console.log(res.data);
	});
});