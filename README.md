# Simple video games search application

This project is a simple application for searching games built with angualr-seed and created to play around with angularJS.<br />
If you're not familiar with angular-seed check out their awesome documentation at:
[angular/angular-seed](https://github.com/angular/angular-seed)<br />

I think I met all of the goals described below and I've added some extra features such as:<br />
Theme switcher<br />
Inner page navigation<br />
And 3 extra games to the '.json' file since it was boring working with only 3 games displaying :)<br />

The tools Iv'e used for this project are:<br />
AngularJS<br />
Angular-seed<br />
Sass<br />
Compass<br />
Susy<br />
Breakpoint<br />
Grunt<br />


## Project Goals

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


### Clone video-games

Clone the video-games repository using [git][git]:

```
git clone https://github.com/DOMUSNETWORK/video-games.git
```


### Install Dependencies

angular-seed have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```


### Run the Application

Angular-seed have preconfigured the project with a simple development web server.
The simplest way to start this server is:

```
npm start
```

Now browse to the app at `http://localhost:8000/app/index.html`.


### Production Build

We utilize the grunt task manager to build our app for production. To start the process just type:

```
grunt
```

At this point the 'disp' directory will be created at the root of the project with all the necessary files for deployment.


### Compile SASS

I've used Webstorm's built-in compass/sass file watcher to compile my sass files.<br/>
of course you can just use 'compass' directly from terminal or run it through a grunt-task.


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
npm start
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

<b>Add Unit tests</b><br />
<b>Add integration tests</b><br />
<b>Add End-to-End tests</b><br />
<b>Check for cross browser compatibility</b><br />
<b>Work on the Gruntfile, it's not good enough - should add css minifier and some other stuff</b><br />

<br />
<br />






