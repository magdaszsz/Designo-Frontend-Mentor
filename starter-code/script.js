const navToggler = document.querySelector('.nav-toggler');
const nav = document.querySelector('nav')

navToggler.addEventListener('click', () => {
  nav.classList.toggle('show')
})