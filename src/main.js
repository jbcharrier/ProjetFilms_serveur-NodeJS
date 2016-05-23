angular.module('main', ['ngRoute', 'ngResource', 'ui-bootstrap', require('angular-animate'), require('angular-touch'), 'bootstrap-css-only']);

angular.module('main').config(function ($routeProvider, $locationProvider) {

    $routeProvider
        .when('/list', {
            templateUrl: 'list/listTemplate.html',
            controller: 'listController'
        })
        .when('/edit/:id', {
            templateUrl: 'edit/editTemplate.html',
            controller: 'editController'
        })
        .when('/create', {
            templateUrl: 'create/createTemplate.html',
            controller: 'createController'
        })
        .when('/details/:id', {
            templateUrl: 'details/detailsTemplate.html',
            controller: 'detailsController'
        })
        .otherwise({
            redirectTo: '/list'
        });
});