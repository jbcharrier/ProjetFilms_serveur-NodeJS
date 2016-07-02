angular.module('main')
    .factory('Film', function ($resource) {

        var path = 'http://localhost:3002/films/';

        var myFilmRequest = $resource(path + ':id', {id: '@id'});

        var myFilmUpdate = $resource(path + ':id', {id: '@id'},
            {
                'update': { method: 'PUT'}
            });

        function getList(){
            return myFilmRequest.query();
        }
        
        function getFilm(id) {
            return myFilmRequest.get({id:id});
        }

        function saveFilm(id, film) {
            return myFilmUpdate.update({id:id}, film);
        }

        function createFilm(film){
            return myFilmRequest.save(film);
        }

        return {
            query: getList,
            get: getFilm,
            save: saveFilm,
            create: createFilm
        }
    });