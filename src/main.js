angular.module('main', ['ngRoute', 'ngResource']);

angular.module('main').config(function ($routeProvider) {

    $routeProvider
        .when('/list', {
            templateUrl: 'list/listTemplate.html',
            controller: 'listController',
            //reloadOnSearch: 'true'
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