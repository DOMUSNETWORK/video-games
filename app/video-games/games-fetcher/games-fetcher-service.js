'use strict';

videoGames

	.factory('GamesFetcher', ['$http', function ($http) {
		var games = [];

		return {
			get    : function () {
				if (games.length === 0) {
					$http.get('video-games.json').then(
						function (response) {
							games = response.data;
						},
						function (errResponse) {
							console.error('Error while fetching games', errResponse);
						}
					);
				}
				return games;
			},

			retrieve: function (gameId) {
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
			}
		}
	}]);