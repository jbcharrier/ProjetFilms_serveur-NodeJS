angular.module('main')
    .controller('detailsController', function ($scope, Film, $routeParams, RATING) {
        var id = $routeParams.id;
        $scope.film = Film.get(id);
    });