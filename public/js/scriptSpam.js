var onloadCallback = function() {
        grecaptcha.render('html_element', {
          // colocamos la clave para el sitio, generada al crear la aplicacioón
                  'sitekey' : 'CLAVE_DEL_SITIO',
                  'callback' : verifyCallback
                });
         }
        var verifyCallback = function(response) {
                alert(response);
              };
        function valid() {          

        // Validamos si los campos estan vacios y enviamos una alerta
        var nya = jQuery('#nya').val();
        var telefono = jQuery('#telefono').val();
        var email = jQuery('#email').val();
        var asunto = jQuery('#asunto').val();
        var mensaje = jQuery('#mensaje').val(); 
        var gc = jQuery('#g-recaptcha-response').val();
                 
        if(!nya){
                  alert('Por favor, ingresa tus Nombres y Apellidos');
                  $("#nya").focus();
                  return false;                  
                }

        if(!telefono){
                  alert('Por favor, ingresa tu Telefono');
                  $("#telefono").focus();
                  return false;
                }

        if(!email){
                  alert('Por favor, ingresa tu Email');
                  $("#email").focus();
                  return false;
                }

        if(!asunto){
                  alert('Por favor, ingresa el Asunto de tu Mensaje');
                  $("#asunto").focus();
                  return false;
                }

        if(!mensaje){
                  alert('Por favor, ingresa tu Mensaje');
                  $("#mensaje").focus();
                  return false;
                }

        if(!gc){
                  alert('Por favor, activa la casilla de verificación');
                  return false;
                }

        else {
        return true;
        }
        }