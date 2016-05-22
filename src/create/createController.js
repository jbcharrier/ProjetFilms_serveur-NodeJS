angular.module('main')
    .controller('createController', function ($scope, $routeParams, Film) {

        var id = $routeParams.id;

        Film.get(id).then(function (film) {
            $scope.film = film.data;
        });

        $scope.create = function (film) {
            Film.create(id, film);
        }
    });