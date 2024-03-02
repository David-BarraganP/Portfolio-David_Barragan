document.addEventListener("DOMContentLoaded", function () {
  // codigo
    const changeMode = document.querySelector('#toggleModeBtn');
    const modeText = document.querySelector('#modeText');
    const body = document.querySelector('body')
  
  
    changeMode.addEventListener('click', function (e) {
  
      // Obtener el contenido actual eliminando espacios en blanco al principio y al final
      const currentMode = modeText.textContent.trim();
      // console.log(currentMode);
  
      // Cambiar entre dark_mode y light_mode
      if (currentMode === 'light_mode') {
        modeText.textContent = 'dark_mode';
        body.classList.remove('body--dark');
        document.querySelector('.header_logo').src = 'assets/img/Image.png';
      } else {
        modeText.textContent = 'light_mode';
        body.classList.add('body--dark')
        document.querySelector('.header_logo').src = 'assets/img/Imagen1.png';
      }
  
      // window.alert('Cambio de modo realizado');
    });
  
  })