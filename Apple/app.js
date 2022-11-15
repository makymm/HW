const burger = document.querySelector('.burger');
const navmenu = document.querySelector('.nav');

burger.addEventListener('click', function(){
    navmenu.classList.toggle('open_menu');
})