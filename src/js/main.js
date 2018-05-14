// import "babel-polyfill";
window.addEventListener('DOMContentLoaded', init);

// import $ from 'jquery';
// import skick from 'slick-carousel';
 
function init () {
    // slider 
 
    $('.main-slider__list').slick({
        fade: true,
        cssEase: 'linear',
        dots: false,
        nextArrow: '<button class="slick-arrow arrow-next"></button>',
        prevArrow: '<button class="slick-arrow arrow-prev"></button>'  
    });  

  
    // popUp

    document.getElementById('subscribe').addEventListener('click', function (e) {
        e.preventDefault();
        $('.modal__subscribe').bPopup({
            speed: 650,
            transition: 'slideIn',
            // transitionClose: 'slideBack',
        });
    }) 

    document.querySelector('.modal__close').addEventListener('click', function (e) {
        $('.modal__subscribe').bPopup({
            speed: 650,
            transition: 'slideIn',
            // transitionClose: 'slideBack',
        }).close();
    }) 
} 


