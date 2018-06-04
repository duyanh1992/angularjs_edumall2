var app = angular.module('myApp', ['ngRoute']);

app.controller('MyController', function(){

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
