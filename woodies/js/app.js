$('.owl-carousel').owlCarousel({
    items:1,
    loop:true,
    nav:true,
    center:true,
    margin:16,
    URLhashListener:true,
    autoplayHoverPause:true,
    startPosition: 'URLHash'
});

const owlPrev = document.querySelector('.owl-prev');
const owlNext = document.querySelector('.owl-next');

owlPrev.innerHTML = '<div aria-label="Previous" class="owl_nav">Previous</div>';
owlNext.innerHTML = '<div aria-label="Next" class="owl_nav">Next</div>';

const burger = document.querySelector('.burger');
const navMenu = document.querySelector('.nav');

burger.addEventListener('click', function(){
    navMenu.classList.toggle('open_menu');
})