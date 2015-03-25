'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('games app', function () {

	browser.get('index.html');

	it('should automatically redirect to /video-games when location hash/fragment is empty', function () {
		expect(browser.getLocationAbsUrl()).toMatch("/video-games");
	});


	describe('games list', function () {

		beforeEach(function () {
			browser.get('index.html#/video-games');
		});


		it('should render video-games when user navigates to /video-games', function () {
			expect(element.all(by.css('[ng-view] p')).first().getText()).
				toMatch(/partial for view 1/);
		});

	});


	describe('game details', function () {

		beforeEach(function () {
			browser.get('index.html#/video-games/dota-2');
		});


		it('should render game details when user navigates to /video-games/dota-2', function () {
			expect(element.all(by.css('[ng-view] p')).first().getText()).
				toMatch(/partial for view 2/);
		});

	});

});
