'use strict';

videoGames

	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider
			.when('/video-games', {
				templateUrl: 'video-games/games-list/games-list.html',
				resolve    : {
					async: ['GamesFetcher', function (GamesFetcher) {
						return GamesFetcher.get();
					}]
				},
				controller : 'GamesListController as listCtrl'
			})
			.when('/video-games/:id', {
				templateUrl: 'video-games/game-details/game-details.html',
				resolve    : {
					async: ['GamesFetcher', function (GamesFetcher) {
						return GamesFetcher.get();
					}]
				},
				controller : 'GameDetailsController  as detailsCtrl'
			});
	}]);
