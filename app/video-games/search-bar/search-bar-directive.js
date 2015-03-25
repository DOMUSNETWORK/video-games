'use strict';

videoGames

	.directive('searchBar', [function () {
		return {
			templateUrl: 'video-games/search-bar/search-bar.html',
			restrict   : 'A',
			replace    : true,
			scope      : {
				'barQuery': '=filter',
				'barOrder': '=order',
				'barDirection': '=direction'
			}
		}
	}]);