window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    const headerHeight = document.querySelector('header').offsetHeight;

    if (window.scrollY >= headerHeight) {
        navbar.classList.add('sticky'); // fixe la navbar en haut
    } else {
        navbar.classList.remove('sticky'); // navbar normale
    }
});

const hero = document.querySelector(".hero");

document.addEventListener("mousemove", e => {
    const x = (e.clientX - window.innerWidth / 2) / 60;
    const y = (e.clientY - window.innerHeight / 2) / 60;

    hero.style.transform = `translate(${x}px, ${y}px)`;
});

const links = document.querySelectorAll("nav a");
const indicator = document.querySelector(".nav-indicator");
const navbar = document.getElementById('navbar');

links.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault(); // empêche le scroll instantané par défaut

        const targetId = link.getAttribute("href").substring(1); // récupère l'id
        const targetElement = document.getElementById(targetId);

        const navbarHeight = navbar.offsetHeight; // hauteur de la navbar
        const targetPosition = targetElement.offsetTop - navbarHeight; // position en tenant compte de la navbar

        window.scrollTo({
            top: targetPosition,
            behavior: "smooth" // scroll fluide
        });

        // Déplace aussi l'indicateur sous le lien cliqué
        const rect = link.getBoundingClientRect();
        const navRect = link.parentElement.getBoundingClientRect();
        indicator.style.width = rect.width + "px";
        indicator.style.left = rect.left - navRect.left + "px";
    });
});

function openCV() {
    document.getElementById("cvModal").style.display = "block";
    document.body.style.overflow = "hidden";
}

function closeCV() {
    document.getElementById("cvModal").style.display = "none";
    document.body.style.overflow = "auto";
}

const video = document.getElementById('myVideo');

video.addEventListener('click', function() {
    if (video.paused) {
        video.play(); // Joue la vidéo si elle est en pause
    } else {
        video.pause(); // Met en pause la vidéo si elle joue
    }
});

video.addEventListener('dblclick', function() {
    if (video.requestFullscreen) {
        video.requestFullscreen(); // Passer en plein écran
    } else if (video.mozRequestFullScreen) { // Firefox
        video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) { // Chrome, Safari et Opera
        video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) { // IE/Edge
        video.msRequestFullscreen();
    }
});


window.onload = function() {
    const zoomWarning = document.getElementById("zoomWarning");
    const lastSeen = localStorage.getItem("zoomWarningLastSeen");

    const THIRTY_MINUTES = 30 * 60 * 1000; // 30 min en ms
    const now = Date.now();

    if (!lastSeen || (now - lastSeen) > THIRTY_MINUTES) {
        zoomWarning.style.display = 'flex';
    }
};

function closePopup() {
    const zoomWarning = document.getElementById("zoomWarning");
    zoomWarning.style.display = 'none';

    localStorage.setItem("zoomWarningLastSeen", Date.now());
}
