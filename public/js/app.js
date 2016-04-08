angular.module('spaApp', ['ngRoute'])
.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/presentacion', {
            templateUrl: 'inicio.html',
            controller: 'InicioCtrl',
 
        })
        .when('/datosPersonales', {
            templateUrl: 'perfil.html',
            controller: 'PerfilCtrl',
        })
        .when('/experiencia', {
            templateUrl: 'mensajes.html',
            controller: 'MensajesCtrl',
        })
    .when('/conocimientos', {
            templateUrl: 'mensajes.html',
            controller: 'MensajesCtrl',
        })
     .when('/vistaGeneral', {
            templateUrl: 'vistalGeneral.html',
            controller: 'MensajesCtrl',
        })
        .otherwise({
            redirectTo: '/presentacion'
        });
}]);
 
