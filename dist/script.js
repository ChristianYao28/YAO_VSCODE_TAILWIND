const toggle = document.querySelector('.toggle__menu');
const nav = document.querySelector('.header__nav');

toggle.addEventListener('click', ()=> {
    toggle.classList.toggle('open');
    nav.classList.toggle('open');
});

var slider = tns({
    container: '.tweets__wrapper',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controlsText: [
        '<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>'
    ]
  });