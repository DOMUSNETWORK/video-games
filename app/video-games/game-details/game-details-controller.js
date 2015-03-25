'use strict';

videoGames

	.controller('GameDetailsController', ['$routeParams', 'GamesFetcher', function ($routeParams, GamesFetcher) {
		var self = this,
			gamesArr = GamesFetcher.get(),
			curGame = GamesFetcher.retrieve($routeParams.id);

		self.game = curGame.game;

		if (curGame.index > 0) {
			self.prevGame = gamesArr[curGame.index - 1].id;
		} else {
			self.prevGame = gamesArr[gamesArr.length - 1].id;
		}

		if (curGame.index < gamesArr.length - 1) {
			self.nextGame = gamesArr[curGame.index + 1].id;
		} else {
			self.nextGame = gamesArr[0].id;
		}

	}]);

