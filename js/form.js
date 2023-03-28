$(document).ready(function() {
    $('#enviar-form').click(function() {
      // Obtener los valores del formulario
      var nombre = $('#first_name').val();
      var apellido = $('#last_name').val();
      var email = $('#email').val();
      var mensaje = $('#icon_prefix2').val();
  
      // Crear una cadena de consulta con los valores del formulario
      var queryString = 'subject=' + encodeURIComponent('Mensaje desde el sitio web');
      queryString += '&body=' + encodeURIComponent('Nombre: ' + nombre + '\nApellido: ' + apellido +  '\nEmail: ' + email + '\nMensaje: ' + mensaje);
  
      // Abrir el cliente de correo electrónico con los datos prellenados
      window.open('mailto:destinatario@dominio.com?' + queryString);

      document.querySelector('#form').reset();
    });
  });
  
