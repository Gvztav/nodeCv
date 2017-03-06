angular.module('spaApp')
    .controller('TodoController', ['$scope', 'Todos', function ($scope, Todos) {
          $scope.editing = [];
          $scope.todos = Todos.query();
          $scope.message = "Inicio.";

          $scope.save = function(){
            if(!$scope.newTodo || $scope.newTodo.length < 1){
              $scope.mensajeCorto = 'Escriba algo'; // clear textbox
              return;
            }
            var todo = new Todos({ name: $scope.newTodo, completed: false });

            todo.$save(function(){
              $scope.todos.push(todo);
              $scope.newTodo = ''; // clear textbox
            });
          }

          $scope.update = function(index){
            var todo = $scope.todos[index];
            Todos.update({id: todo._id}, todo);
            $scope.editing[index] = false;
          }

          $scope.edit = function(index){
            $scope.editing[index] = angular.copy($scope.todos[index]);
          }

          $scope.cancel = function(index){
            $scope.todos[index] = angular.copy($scope.editing[index]);
            $scope.editing[index] = false;
          }

          $scope.remove = function(index){
            var todo = $scope.todos[index];
            Todos.remove({id: todo._id}, function(){
              $scope.todos.splice(index, 1);
            });
          }
}]);

angular.module('spaApp')
      .controller('TodoDetailCtrl', ['$scope', '$routeParams', 'Todos', '$location', function ($scope, $routeParams, Todos, $location) {
          $scope.todo = Todos.get({id: $routeParams.id });

          $scope.remove = function(){
            Todos.remove({id: $scope.todo._id}, function(){
              $location.url('/');
            });
          }
}]);
 
angular.module('spaApp')
 .controller('InicioCtrl', ['$scope', 'Experiencias', function ($scope, Experiencias) {
          $scope.editing = [];
          $scope.experiencias = Experiencias.query();
          $scope.message = "Inicio.";

          $scope.save = function(){
            if(!$scope.newExperiencia || $scope.newExperiencia.length < 1){
              $scope.mensajeCorto = 'Escriba algo'; // clear textbox
              return;
            }
            var experiencia = new Experiencias({ name: $scope.newExperiencia, completed: false });

            experiencia.$save(function(){
              $scope.experiencias.push(experiencia);
              $scope.newExperiencia = ''; // clear textbox
            });
          }

          $scope.update = function(index){
            var experiencia = $scope.experiencias[index];
            Experiencias.update({id: experiencia._id}, experiencia);
            $scope.editing[index] = false;
          }

          $scope.edit = function(index){
            $scope.editing[index] = angular.copy($scope.experiencias[index]);
          }

          $scope.cancel = function(index){
            $scope.experiencias[index] = angular.copy($scope.editing[index]);
            $scope.editing[index] = false;
          }

          $scope.remove = function(index){
            var experiencia = $scope.experiencias[index];
            Experiencias.remove({id: experiencia._id}, function(){
              $scope.experiencias.splice(index, 1);
            });
          }
}]);
  /*.controller('InicioCtrl', function ($scope) {
    $scope.message = "Inicio.";}) */
angular.module('spaApp')
  //aqui estoy definiendo un controllador.
  .controller('PerfilCtrl', function ($scope) {
    $scope.message = "Perfil.";
});

  angular.module('spaApp')
  .controller('ConocimientosCtrl', ['$scope', 'Conocimientos', function ($scope, Conocimientos) {
           $scope.conocimientos = Conocimientos.query();
           $scope.message = "Conocimientos.";
         
}]);

  angular.module('spaApp')
  .controller('ProyectosCtrl', function ($scope) {
    $scope.message = "Proyectos";
});

  angular.module('spaApp')
  .controller('ProgramacionCtrl', ['$scope', 'Herramientas', function ($scope, Herramientas) {
           $scope.herramientas = Herramientas.query();
           $scope.message = "Programación";
         
}]);

  