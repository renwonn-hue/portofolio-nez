let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// Scroll Reveal
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200 
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portofolio-box, .contact, .keychain-container', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// Typed JS
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Data Analyst', 'UI/UX Designer'],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
});

// Particles.js Config
particlesJS("particles-js", {
  "particles": {
    "number": { "value": 60, "density": { "enable": true, "value_area": 800 } },
    "color": { "value": "#666666" },
    "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" } },
    "opacity": { "value": 0.5, "random": false },
    "size": { "value": 3, "random": true },
    "line_linked": { "enable": true, "distance": 150, "color": "#888888", "opacity": 0.4, "width": 1 },
    "move": { "enable": true, "speed": 2, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": { "enable": true, "mode": "grab" },
      "onclick": { "enable": true, "mode": "push" },
      "resize": true
    },
    "modes": { "grab": { "distance": 140, "line_linked": { "opacity": 1 } }, "push": { "particles_nb": 4 } }
  },
  "retina_detect": true
});

// --- KONTROL LOADING SCREEN & SLOW MOTION ---
window.addEventListener('load', () => {
    const loader = document.getElementById('loader-wrapper');
    const mainWrapper = document.getElementById('main-wrapper');
    
    // Memberikan jeda waktu 1.5 detik agar animasi loading sempat terlihat
    setTimeout(() => {
        // Hilangkan loader
        loader.style.opacity = '0';
        loader.style.visibility = 'hidden';
        
        // Pemicu efek slow motion masuk ke website utama
        setTimeout(() => {
            mainWrapper.classList.add('loaded');
        }, 200);
        
    }, 1500); 
});