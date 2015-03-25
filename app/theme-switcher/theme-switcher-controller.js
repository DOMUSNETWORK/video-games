'use strict';

themeSwitcher

	.controller('themeController', ['$scope', function ($scope) {
		var self = this;

		self.css = 'css/themes/app-theme-0';

		self.themes = [
			{
				id: 'theme00',
				css: 'css/themes/app-theme-0',
				name: 'Default'
			},
			{
				id: 'theme01',
				css: 'css/themes/app-theme-1',
				name: 'Theme 1'
			},
			{
				id: 'theme02',
				css: 'css/themes/app-theme-2',
				name: 'Theme 2'
			}
		];

	}]);

