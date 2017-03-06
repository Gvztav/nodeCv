angular.module('spaApp', ['ngRoute', 'ngResource'])
        //---------------
        // Services
        //---------------
        .factory('Todos', ['$resource', function($resource){
          return $resource('/todos/:id', null, {
            'update': { method:'PUT' }
           
          });
        }])

        .factory('Experiencias', ['$resource', function($resource){
          return $resource('/experienciasDAO/:id', null, {
            'update': { method:'PUT' }
           
          });
        }])

         .factory('Conocimientos', ['$resource', function($resource){
          return $resource('/conocimientosDAO/:id', null, {
            'update': { method:'PUT' }
           
          });
        }])

          .factory('Herramientas', ['$resource', function($resource){
          return $resource('/herramientasDAO/:id', null, {
            'update': { method:'PUT' }
           
          });
        }])

        //---------------
        // Controllers
        //---------------


        //---------------
        // Routes
        //---------------

        .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'inicio.html',
            controller: 'InicioCtrl',
 
        })
        /*.when('/', {
              templateUrl: '/todos.html',
              controller: 'TodoController'
            })*/
       /* .when('/:id', {
              templateUrl: '/todoDetails.html',
              controller: 'TodoDetailCtrl'
        })*/.when('/pagina2', {
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
            redirectTo: '/'
        });
}]);