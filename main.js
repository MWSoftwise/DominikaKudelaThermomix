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