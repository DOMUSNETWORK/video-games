'use strict';

videoGames

	.controller('GamesListController', ['GamesFetcher', function (GamesFetcher) {
	var self = this;

	GamesFetcher.async().then(function() {
		self.games = GamesFetcher.games();
	});

	self.gamesOrder = 'price';
	self.direction = 'reverse';

}]);

