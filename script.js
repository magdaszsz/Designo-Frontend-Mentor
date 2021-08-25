const navToggler = document.querySelector('.nav-toggler');
const nav = document.querySelector('nav');
const list = document.querySelector('.nav-list');

navToggler.addEventListener('click', () => {
  navToggler.classList.toggle('show');
  if(list.classList.contains('slidein')){
    list.classList.remove('slidein')
    list.classList.add('slideout')
  } else {
    list.classList.remove('slideout');
    list.classList.add('slidein')
  }
})