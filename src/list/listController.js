angular.module('main')
    .controller('listController', function ($scope, Film) {
        $scope.films = Film.query();
    });