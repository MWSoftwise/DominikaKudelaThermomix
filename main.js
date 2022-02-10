const hamburger=document.querySelector('.hamburger');
const menuList=document.querySelector('.menu-list');
const hamburgerSpan = [...document.querySelectorAll('.hamburger span')];

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    menuList.classList.toggle('active');
    hamburgerSpan.forEach(e => {
        e.classList.toggle('active')
    });
})

// MENU SCROLLING

$('nav ul li a').on("click", function () {
    const scrolling = "#" + $(this).attr('data-menu');

    $('body, html').animate({
        scrollTop: $(scrolling).offset().top - 80
    })
})
$('nav aside').on("click", function () {
    const scrolling = "#" + $(this).attr('class');

    $('body, html').animate({
        scrollTop: $(scrolling).offset().top
    })
})