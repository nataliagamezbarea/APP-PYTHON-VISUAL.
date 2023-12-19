$(document).ready(function(){
    $('#validarCorreo').click(function(){
      var correo = $('#email').val();
    
      if (!validarCorreoElectronico(correo)) {
        alert("Por favor, ingresa un correo de dominio @santjosepobrer.es válido.");
        return;
      }
      
      // Si el correo es válido, mostrar los campos adicionales
      $('#camposSegundoForm').slideDown(); // Muestra los campos de forma animada
    });
    
    $('#formulario-pago').submit(function(event){
      event.preventDefault();
      SendFormGoogleSheets();
    });
  });
  
  function validarCorreoElectronico(correo) {
    var regex = /^[a-zA-Z0-9._-]+@santjosepobrer\.es$/;
    return regex.test(correo);
  }
  
  function SendFormGoogleSheets() {
    var correo = $('#email').val();
    
    if (!validarCorreoElectronico(correo)) {
      alert("Por favor, ingresa un correo de dominio @santjosepobrer.es válido.");
      return;
    }
  
    // Aquí puedes llamar a tu función SendFormGoogleAppsScript si lo necesitas
    // SendFormGoogleAppsScript();
    window.location.href = "https://nataliagamezbarea.github.io/EXAMEN-PYTHON-VISUAL/4-App_empresarial/3-Formulario_general.html";
  }
  