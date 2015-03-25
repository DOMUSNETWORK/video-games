'use strict';

videoGames

	.controller('GamesListController', ['GamesFetcher', function (GamesFetcher) {
	var self = this;

	self.games = GamesFetcher.get();
	self.gamesOrder = 'price';
	self.direction = 'reverse';

}]);

