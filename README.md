# Simple video games search application

This project is a simple angular app for searching games, you can checkout the [DEMO](http://video-games.herokuapp.com) here,<br />
it uses the angualr-seed framework and created for playing around with angularJS.<br />

If you're not familiar with angular-seed check out their awesome documentation at:
[angular/angular-seed](https://github.com/angular/angular-seed)<br />

I think I met all of the goals described below and I've added some extra features such as:<br />
Theme switcher<br />
Inner page navigation<br />
Three extra games to the '.json' file since it was boring working only with 3 games displaying :)<br />

<b>The tools I've used for this app are:</b>

[AngularJS](https://angularjs.org/)<br />
[Angular-seed](https://github.com/angular/angular-seed)<br />
[Sass](http://sass-lang.com/)<br />
[Compass](http://compass-style.org/)<br />
[Susy](http://susy.oddbird.net/)<br />
[Breakpoint](http://breakpoint-sass.com/)<br />
[GruntJS](http://gruntjs.com/)<br />


## Project Brief

The objective of the exercise is to create an Angular (Or any other framework, home made code) application displaying video games.<br />
You will use the attached json file as data source, along with the associated pictures.<br />

The app should comport 2 page types:<br />
Display all items page (http://www.mydomain.com/video-games)<br />
Display single item page (http://www.mydomain.com/video-games/:id)<br />


### The Display all items page

This page should display all 3 video games ordered by DESC price, with the following properties:<br />

name (should be a link to the Single page of that video game)<br />
price<br />
release-year<br />
image<br />
Add search box (using name property)<br />


### The Display single item page

Display the name, release year, price, image and description.<br />
Add back button to the “Display all items” page<br />

Pay attention to:<br />
Separation of concerns<br />
Code duplication<br />
Reusable components<br />
Design<br />
Use angular modules if needed (ui-router, ui-bootstrap, etc… )<br />

Bonus:<br />
Add filter by ‘release-date’, by ‘abc’, price (both ASC and DESC)<br />
Animations for page transitions<br />
Responsive<br />


## Getting Started

To get you started you can simply clone the video-games repository and install the dependencies.


### Clone git repository

Clone the video-games repository using [git][git]:

```
git clone https://github.com/DOMUSNETWORK/video-games.git
```


### Install Dependencies

angular-seed have preconfigured `npm` to automatically run `bower`,<br/>
though since I've added `Heroku` deployment support via `express` server it is now necessary<br />
to run `bower install` manually and then start a `node` server if you wish to run locally.

```
bower install
```


### Run the Application

Angular-seed have a preconfigured `http-server` simple development web server,<br />
For easy `Heroku` deployment I had to switch it to `express`,<br />
The simplest way to start this server is:

```
node server.js
```

Now browse to the app at `http://localhost:3000`.


### Production Build

We utilize the grunt task manager to build our app for production. To start the process just type:

```
grunt
```

At this point the 'disp' directory will be created at the root of the project with all the necessary files for deployment,<br />
I'm still working on this part so don't get upset if it's lacking features and proper structure.


### Compile SASS

I've used Webstorm's built-in compass/sass file watcher to compile my sass files.<br/>
of course you can just use 'compass' directly from terminal or add it as a grunt-task.


### Running Unit Tests

The easiest way to run the unit tests is to use the supplied npm script:

```
npm test
```

You can also ask Karma to do a single run:

```
npm run test-single-run
```

### End to end testing

First our web server needs to be serving up the application, so that Protractor
can interact with it.

```
node server.js
```

In addition, since Protractor is built upon WebDriver we need to install it:

```
npm run update-webdriver
```

To run the the test type:

```
npm run protractor
```

# TODO:

<b>* Add Unit tests</b><br />
<b>* Add integration tests</b><br />
<b>* Add End-to-End tests</b><br />
<b>* Check for cross browser compatibility</b><br />
<b>* Work on the Gruntfile, it's not good enough - should add css minifier and some other stuff</b><br />
<b>* Fix Heroku deployment, it get's the development version of the app, it needs to deploy the production version</b><br />
<b>* Change direct links to functions using $location on controllers</b><br />


## Thanks to:
<b>Ray Villalobos</b> - from [Lynda.com](http://Lynda.com) for his awesome tutorials,<br />
this app is based on his angular course and was a great starting point for diving into angular.<br />

<b>Alex Vanston</b> - from [team Treehouse](http://teamtreehouse.com/) for his great angular course.<br />

<b>Shyam Seshadri & Brad Green</b> - For their super-awesome book, ['AngularJS Up & Running'](http://shop.oreilly.com/product/0636920033486.do/),<br />
which I highly recommend for anyone who's struggling with angular.






