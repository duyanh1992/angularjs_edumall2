var app = angular.module('myApp', ['ngRoute']);

app.controller('MyController', function($scope, $http){
	$http.get('http://localhost/MyLearning/angularjs_edumall2/Angular_CI_CleanBlog/index.php/mycontroller/getaboutdata')
	.then(function(res){
		//console.log(res.data);
		$scope.aboutData = res.data;
		console.log($scope.aboutData);
	}, function(error){
		console.log('Error');
	});
});

app.config(function ($locationProvider, $routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'pages/content_index.html'
	})

	.when('/about', {
		templateUrl: 'pages/content_about.html'
	})

	.when('/contact', {
		templateUrl: 'pages/content_contact.html'
	})

	.when('/post', {
		templateUrl: 'pages/content_post.html'
	})

	.otherwise({
		redirectTo : '/'
	});

	$locationProvider.html5Mode(true);
});


