angular.module('spaApp')
  .controller('InicioCtrl', function ($scope) {
    $scope.message = "Inicio.";
});
 
angular.module('spaApp')
  .controller('PerfilCtrl', function ($scope) {
    $scope.message = "Perfil.";
});
 
angular.module('spaApp')
  .controller('MensajesCtrl', function ($scope) {
    $scope.message = "Mensajes.";
});

  angular.module('spaApp')
  .controller('vistaGeneralCtrl', function ($scope) {
    $scope.educacion = "Educación";
    $scope.experiencia = "Experiencia";
    $scope.informatica = "Informática";
    $scope.conocimientos = "Otros conocimientos";
    $scope.cursos = "Cursos hechos";
    $scope.idioma = "Idiomas";
     $scope.objetivo = "Objet"ivos;

});