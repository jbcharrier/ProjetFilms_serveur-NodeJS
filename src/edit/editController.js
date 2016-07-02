angular.module('main')
    .controller('editController', function ($scope, $q, $routeParams, Film, RATING) {

        var id = $routeParams.id;

        $scope.film = Film.get(id);
        
        $scope.rating = RATING;
        console.log('RATING', RATING);

        $scope.save = function(film){ 
            Film.save(id, film);
        };
    });
