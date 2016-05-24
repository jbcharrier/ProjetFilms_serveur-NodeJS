angular.module('main')
    .controller('listController', function ($scope, $http, $location) {

        $http.get('http://localhost:3002/films').then(function (films) {
            $scope.films = films.data;
            console.log($scope);
            
            //$scope.toto = 20;
            
            //$scope.$watch('toto', function(newVal, oldVal){
            //    "use strict";
            //    if(newVal != oldVal && newVal < 100){
            //        alert(newVal);
            //   }
            //});

            //$scope.user = {};
            //$scope.typeGender = [{label: "Homme", value: 1}, {label: "Meuf", value: 2}, {label: "Inconnu", value: 3}];

            //$scope.tutu = function(){
            //    $location.path('#/?tutu=4');
            //}
        //});
    });
    });