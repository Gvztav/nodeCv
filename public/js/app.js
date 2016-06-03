angular.module('spaApp', ['ngRoute'])
.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/inicio', {
            templateUrl: 'inicio.html',
            controller: 'InicioCtrl',
 
        })
        .when('/pagina2', {
            templateUrl: 'pagina2.html',
            controller: 'PerfilCtrl',
        })
        .when('/conocimientos', {
            templateUrl: 'conocimientos.html',
            controller: 'ConocimientosCtrl',
        })
        .when('/programacion', {
            templateUrl: 'programacion.html',
            controller: 'ProgramacionCtrl',
        })
        .when('/proyectos', {
            templateUrl: 'proyectos.html',
            controller: 'ProyectosCtrl',
        })
        .otherwise({
            redirectTo: '/inicio'
        });
}]);