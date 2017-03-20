/**
 * Created by Siddharth on 3/8/2017.
 */
    // create the module and name it application
var application = angular.module('siddWebsite', ['ngRoute']);

// configure our routes
application.config(function($routeProvider) {
    $routeProvider

    // route for the home page
        .when('/', {
            templateUrl : 'pages/home.html',
            controller  : 'mainController'
        })

        // route for the about page
        .when('/about', {
            templateUrl : 'pages/about.html',
            controller  : 'aboutController'
        })

        // route for the projects page
        .when('/projects', {
            templateUrl : 'pages/projects.html',
            controller  : 'projectsController'
        })


        // route for the contact page
        .when('/contact', {
            templateUrl : 'pages/contact.html',
            controller  : 'contactController'
        });
});

// create the controller and inject Angular's $scope
application.controller('mainController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});

application.controller('aboutController', function($scope) {
    $scope.message = 'Look! I am an about page.';
});

application.controller('projectsController', function($scope) {
    $scope.message = 'Look! I am an Projects page.';
});

application.controller('contactController', function($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});