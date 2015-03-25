'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
	'ngRoute',
	'ngAnimate',
	'myApp.themeSwitcher',
	'myApp.videoGames'
]).
	config(['$routeProvider', function ($routeProvider) {
		$routeProvider.otherwise({redirectTo: '/video-games'});
	}]);


var themeSwitcher = angular.module('myApp.themeSwitcher', []);

var videoGames = angular.module('myApp.videoGames', ['ngRoute', 'ngAnimate']);




