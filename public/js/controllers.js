angular.module('spaApp')
  .controller('InicioCtrl', function ($scope) {
    $scope.message = "Inicio.";
});
 
angular.module('spaApp')
  .controller('PerfilCtrl', function ($scope) {
    $scope.message = "Perfil.";
});

  angular.module('spaApp')
  .controller('ConocimientosCtrl', function ($scope) {
    $scope.message = "Conocimientos";
});
  angular.module('spaApp')
  .controller('ProyectosCtrl', function ($scope) {
    $scope.message = "Proyectos";
});

    angular.module('spaApp')
  .controller('ProgramacionCtrl', function ($scope) {
    $scope.message = "Programacion";
});