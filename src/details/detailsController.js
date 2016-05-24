angular.module('main')
    .controller('detailsController', function ($scope, Film, $routeParams) {

        var id = $routeParams.id;

        Film.get(id).then(function (film) {
            $scope.film = film.data;
        });
    });