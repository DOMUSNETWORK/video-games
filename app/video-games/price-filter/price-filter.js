'use strict';

videoGames

	.filter('gamePrice', [function() {
		return function (price) {
			if (price === 0) {
				return 'Free game';
			} else if (price > 0) {
				return '$' + price;
			}
		};
	}]);