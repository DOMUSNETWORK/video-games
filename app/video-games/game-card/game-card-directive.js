'use strict';

videoGames

	.directive('gameCard', [function () {
		return {
			templateUrl: 'video-games/game-card/game-card.html',
			restrict   : 'A',
			replace    : true,
			scope      : {
				'cardData': '='
			}
		}
	}]);