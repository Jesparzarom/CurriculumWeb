$(document).ready(function() {
    $('#enviar-form').click(function() {
      // Obtener los valores del formulario
      var nombre = $('#first_name').val();
      var apellido = $('#last_name').val();
      var email = $('#email').val();
      var mensaje = $('#icon_prefix2').val();
  
      /* // Crear una cadena de consulta con los valores del formulario
      var queryString = 'subject=' + encodeURIComponent(nombre + " "+ apellido + ': Contacto Web');
      queryString += '&body=' + encodeURIComponent('Nombre: ' + nombre + '\nApellido: ' + apellido +  '\nEmail: ' + email + '\nMensaje: ' + mensaje);
  
      // Abrir el cliente de correo electrónico con los datos prellenados
      window.open('mailto:destinatario@dominio.com?' + queryString);

      document.querySelector('#form').reset(); */
    });
  });
  

  $(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y <= 10000 ) {
      $('#floatbtn').removeClass('oculto');
    } else {
      $('#floatbtn').addClass('oculto');
    }
  });
  

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
      direction: 'top',
      hoverEnabled: false
    });
  });
