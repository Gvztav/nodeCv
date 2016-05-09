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
        .otherwise({
            redirectTo: '/inicio'
        });
}]);