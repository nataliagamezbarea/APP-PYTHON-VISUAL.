$(document).ready(function(){
  $('#formulario-pago').submit(function(event){
    event.preventDefault();
    SendFormGoogleAppsScript();
  });
});

function SendFormGoogleAppsScript() {
  $.ajax({
    url: 'https://script.google.com/macros/s/AKfycbzzNkxO2FENHO_g5WAMlgFLrq6JfUsM8b2fX6ReUruvilyni3IkxWCQCdsz3bU4p1weBg/exec',
    type: 'post',
    data: $('#formulario-pago').serialize(),
    success: function(){
      alert("Registro exitoso");
    },
    error: function(){
      alert("Error en el Registro :(");
    }
  });
}

var formularios = document.querySelectorAll('.form-section');
var indiceActual = 0;

function validarCorreo() {
  var correo = document.getElementById('email').value;
  var regex = /^[a-zA-Z0-9._-]+@santjosepobrer\.es$/;
  if (regex.test(correo)) {
    mostrarSiguiente();
  } else {
    alert("El correo electrónico debe ser de dominio santjosepobrer.es");
  }
}

function mostrarSiguiente() {
  if (indiceActual < formularios.length - 1) {
    formularios[indiceActual].classList.remove('show');
    indiceActual++;
    formularios[indiceActual].classList.add('show');
  }
}

function mostrarAnterior() {
  if (indiceActual > 0) {
    formularios[indiceActual].classList.remove('show');
    indiceActual--;
    formularios[indiceActual].classList.add('show');
  }
}

// Llamada para mostrar el primer formulario al cargar la página
formularios[indiceActual].classList.add('show');
