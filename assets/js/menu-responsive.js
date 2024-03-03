
document.addEventListener("DOMContentLoaded", function () {
  const menu = document.getElementById('menu')
  const navMenu = document.getElementById('.nav--menu')

  menu.addEventListener('click', function () {
    navMenu.classList.toggle('nav--transalate')
  })
})