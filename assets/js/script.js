const navBar = document.querySelector('[data-navbar]');
const closeBtn = document.querySelector('[data-nav-close-btn]');
const openBtn = document.querySelector('[data-nav-open-btn]');
const overlay= document.querySelector('[data-overlay]');

// Navbar Toggle

const navElemArr = [overlay, closeBtn,openBtn];

navElemArr.forEach(elt=> {
    elt.addEventListener('click',()=>{
        navBar.classList.toggle('active');
        overlay.classList.toggle('active');
    })
})