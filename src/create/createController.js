angular.module('main')
    .controller('createController', function ($scope, $routeParams, Film, RATING) {
        
        $scope.create = function(film){
            Film.create(film);
        };
        
        $scope.filmRating = RATING;
    });