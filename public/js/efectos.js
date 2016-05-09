$(document).ready(function(){
    $("#myBtn").click(function(){
        $("#myModal").modal();
    });
  
  
  
  $('#formLogin').bootstrapValidator({
    message: 'Este valor no es valido',
    feedbackIcons: {
    valid: 'glyphicon glyphicon-ok',
    invalid: 'glyphicon glyphicon-remove',
    validating: 'glyphicon glyphicon-refresh'
    },
    fields: {
      
    nombre: {
    validators: {
    notEmpty: {
    message: 'El nombre de usuario es requerido'
    }
    }
    },
    email: {
    validators: {
    notEmpty: {
    message: 'El campo de constraseña no debe ser vacio'
    },
    emailAddress: {
      message: 'El email no es válido'
     }
    }
    }
    ,
    asunto:{
      validators:{
        notEmpty: {
          message:'Indique por favor el asunto'
        }
        
      }
    }
    }
    });
  
  
  
  
  
  
  
});
