const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
    console.log(window.scrollY);
    if (window.scrollY >= 1) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
});



const toggle = document.querySelector('.toggle__menu');
const nav = document.querySelector('.header__nav');
const button = document.querySelector('.cta__extend');
const extend = document.querySelector('.cta__os');



toggle.addEventListener('click', ()=> {
    toggle.classList.toggle('open');
    nav.classList.toggle('open');
});

button.addEventListener('click', ()=> {
    button.classList.toggle('open');
    extend.classList.toggle('open');
});

function myFunction() {
    extend.classList.remove('open');
}


var slider = tns({
    container: '.tweets__wrapper',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    speed: 900,
    controlsText: [
        '<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>'
    ]
  });