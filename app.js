// VARIABLES NAVIGATION
const close = document.getElementById('close');
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('nav_mobile');

// VARIABLES HIVER IMAGE  NOS REALISATIONS

const realisations = document.querySelectorAll(".real_and_hover");



// EVENT LISTENERS


// Open and close the mobile nav
hamburger.addEventListener('click', function() {
    mobileNav.classList.toggle('active');
})
close.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
})






// Intersection Observer For scrolling animations
const ratio = .1;
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
  }
    // Left container
const callbackLeft = function(entries, observerLeft) {
    entries.forEach(function(entry) {
        if(entry.intersectionRatio > ratio) {
          
            entry.target.classList.add('reveal_left_visible');
            observerLeft.unobserve(entry.target);
        }
    })
}

  let observerLeft = new IntersectionObserver(callbackLeft, options);
  document.querySelectorAll('.reveal_left').forEach(function(r) {
    observerLeft.observe(r);
  })

//   Right Container
const callbackRight = function(entries, observerRight) {
    entries.forEach(function(entry) {
        if(entry.intersectionRatio > ratio) {
            entry.target.classList.add('reveal_right_visible');
            observerRight.unobserve(entry.target);
        } 
    })
}

let observerRight = new IntersectionObserver(callbackRight, options);
  document.querySelectorAll('.reveal_right').forEach(function(r) {
    observerRight.observe(r);
  });


  

// for(let i=0; i <= realisations.length; i++) {
  
//   realisations[i].addEventListener('mouseover', () => {
//     realisations[i].classList.add('active');
//   });
//   realisations[i].addEventListener('mouseout', () => {
//     realisations[i].classList.remove('active');
//   })
// }



// APPLIQUE LA CLASSE ACTIVE QUAND IMAGE EST HOVER

realisations.forEach(el => {
  el.addEventListener('mouseover', (event) => {

    event.target.parentNode.classList.add('active');
  })
  el.addEventListener('mouseout', (event) => {
    event.target.parentNode.classList.remove('active');
  })
})