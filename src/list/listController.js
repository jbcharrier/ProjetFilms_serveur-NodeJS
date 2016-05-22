angular.module('main')
    .controller('listController', function ($scope, $http) {

        $http.get('http://localhost:3000/films').then(function (films) {
            $scope.films = films.data;
        });
    });