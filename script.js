//selecciona todos los enlaces de navegación 
const navliks=document.queriselectorall('nav a'); 

//agregar un efecto de parpadeo  alos enlaces de navegación 
navliks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.classList.add('blink');
    });
    link.addEventListener('mouseout', () => {
        link.classList.remove('blink');
    });
});

// Agrega un efecto de desplazamiento suave al hacer clic en los enlaces de navegación
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetSection = document.querySelector(event.target.getAttribute('href'));
        targetSection.scrollIntoView({behavior: 'smooth' });
    });
});

// Agrega un efecto de zoom en la imagen de fondo del hero section
const heroSection = document.getElementById('hero');
window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset;
    heroSection.style.backgroundSize = `100% ${100 + scrollPosition /50}%`;
});