angular.module('main')
    .factory('Film', function ($http) {

        var path = 'http://localhost:3000/films/';

        function getFilm(id) {
            return $http.get(path + id);
        }

        function saveFilm(id, film) {
            return $http.put(path + id, film);
        }

        function createFilm(film){
            return $http.post(path, film);
        }

        return {
            get: getFilm,
            save: saveFilm,
            create: createFilm
        }

    });