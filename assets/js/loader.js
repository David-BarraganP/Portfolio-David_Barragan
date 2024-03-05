// const loader = document.getElementById('loader')

// window.addEventListener('load', function () {
//   loader.classList.add('hidden')
// })


document.addEventListener("DOMContentLoaded", function () {

  const loader = document.getElementById('loader')


  // Ocultar el loader cuando la página esté completamente cargada
  window.addEventListener('load', function() {
    loader.classList.add('hidden'); 
  });

  // Mostrar el loader cuando se empiece a cargar la página
  loader.classList.remove('hidden');
});