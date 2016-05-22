angular.module('main')
    .controller('editController', function ($scope, $routeParams, Film) {

        var id = $routeParams.id;

        Film.get(id).then(function (film) {
            $scope.film = film.data;
        });

        $scope.save = function (film) {
            Film.save(id, film);
        }


    });