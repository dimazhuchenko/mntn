/* const navBtn = document.querySelector('.nav-button');
const mobileNav = document.querySelector('.mobile-nav');

navBtn.addEventListener('click', function () {
    mobileNav.classList.toggle('mobile-nav-active');
}) */

const overlay = document.querySelector('.overlay')
const body = document.body;

const btn = document.querySelector('.nav-button')
const menu = document.querySelector('.mobile-nav');

//клик по кнопке//
btn.addEventListener('click', function (event) {
    event.stopPropagation();
    toggleMobileNav()
})

//клик по окну за пределами навигации//
window.addEventListener('click', function (){
    console.log('click on window');

    if (body.classList.contains('no-scroll')) {
        toggleMobileNav()
    }
})

//останавлиаем клик внутри открытой мобильной навигации//
menu.addEventListener('click', function (event) {
    event.stopPropagation();

})

function toggleMobileNav() {
    menu.classList.toggle('mobile-nav-active');
    btn.classList.toggle('nav-button-close');
    document.body.classList.toggle('overlay');
    body.classList.toggle('no-scroll');
}