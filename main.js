const form = document.getElementById('bikerForm');

form.addEventListener('submit', function(e){

  e.preventDefault();

  alert('¡Tu solicitud ha sido enviada correctamente!');

  form.reset();

});
