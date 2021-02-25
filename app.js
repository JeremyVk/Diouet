// VARIABLES
const close = document.getElementById('close');
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('nav_mobile');

// EVENT LISTENERS


// Open and close the mobile nav
hamburger.addEventListener('click', function() {
    mobileNav.classList.toggle('active');
})
close.addEventListener('click', () => {
    mobileNav.classList.toggle('active');

})

