'use strict';

videoGames

	.factory('GamesFetcher', ['$http', '$q', function ($http, $q) {
		var deffered = $q.defer();
		var games = [];
		var GamesFetcher = {};


		GamesFetcher.async = function () {
			if (games.length === 0) {
				$http.get('video-games.json')
					.success(function (data) {
						games = data;
						console.log(data);
						deffered.resolve();
					});
				return deffered.promise;
			} else {
				deffered.resolve();
				return deffered.promise;
			}
		};


		GamesFetcher.games = function() { return games; };


		GamesFetcher.retrieve = function (gameId) {
			if (angular.isDefined(gameId)) {
				var i = 0,
					len = games.length;

				for (; i < len; i++) {
					if (angular.equals(games[i].id, gameId)) {
						return {
							index: i,
							game: games[i]
						};
					}
				}
				return null;
			} else {
				console.error('Error while retrieving game, check arguments for retrieve()');
			}
		};

		return GamesFetcher;
	}]);