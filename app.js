let nav = document.querySelector('.navigation nav')
let hamburgerMenu = document.querySelector('.hamburger-menu')
let text = document.querySelector('.navigation .container')
hamburgerMenu.addEventListener('click', () => {
  nav.classList.toggle('active')
})
