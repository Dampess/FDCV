// Apparition du header au chargement de la page

document.addEventListener("DOMContentLoaded", function () {
    const headerBig = document.querySelector('.headerBig');
    headerBig.style.opacity = 1; 
    headerBig.style.transform = 'scale(1)'; 
  });

//   Apparation du header initial après le scroll et disparition si l'on remonte

window.addEventListener('scroll', () => {
    const headerInit = document.querySelector('.headerInit');
    const scrollValue = window.scrollY;
    const screenHeight = window.innerHeight;
  
    if (scrollValue >= screenHeight) {
        headerInit.style.opacity = 1;
      } else if (scrollValue < screenHeight ) {
        headerInit.style.opacity = 0;
      }
      lastScrollPosition = scrollValue;
  });

// parallaxe Text
document.addEventListener("DOMContentLoaded", function () {
    var rellax = new Rellax('.parallaxe-texte', {
      speed: 4, 
    });
  });

// Apparition section présentation

document.addEventListener('scroll', () => {
    const me = document.querySelector('.me');
    const entreprise = document.querySelector('.entreprise');
    const scrollValue = window.scrollY;
    const screenHeight = window.innerHeight;
  
    if (scrollValue >= screenHeight / 2) {
      me.style.opacity = 1;
      me.style.transform = 'translateX(0)';
    }else if (scrollValue < screenHeight ) {
        me.style.opacity = 0;
      }
      lastScrollPosition = scrollValue;
  
    if (scrollValue >= screenHeight) {
      entreprise.style.opacity = 1;
      entreprise.style.transform = 'translateX(0)';
    }else if (scrollValue < screenHeight ) {
        entreprise.style.opacity = 0;
      }
      lastScrollPosition = scrollValue;
  });

//   Formation et Carrière Apparition au scroll venu du bas

const formationCarriere = document.getElementById('formationCarreer');
const formation = document.querySelector('.formation');
const carriere = document.querySelector('.carreer');
let lastScrollValue = 0;

window.addEventListener('scroll', () => {
  const scrollValue = window.scrollY;
  const windowHeight = window.innerHeight;
  const formationPosition = formation.offsetTop;
  const carrierePosition = carriere.offsetTop;


  const triggerOffset = windowHeight * 0.6; 
  const hideOffset = windowHeight * 0.9; 

  if (scrollValue >= formationPosition - triggerOffset) {
    formation.style.transform = 'scale(1)'; 
    carriere.style.transform = 'scale(1)'; 
  }

  if (scrollValue < lastScrollValue && scrollValue < carrierePosition - hideOffset) {
    formation.style.transform = 'scale(0.7)'; 
    carriere.style.transform = 'scale(0.7)'; 
  }

  lastScrollValue = scrollValue;
});

// Section Compétences nuage

const competences = document.querySelectorAll('.compet');
const positions = [];

const section = document.getElementById('competences');
const sectionWidth = section.offsetWidth;
const sectionHeight = section.offsetHeight;
const elementWidth = 200; // Largeur maximale de vos éléments
const elementHeight = 50; // Hauteur maximale de vos éléments

competences.forEach((competence) => {
  let randomX, randomY;
  let isCollision = true;

  while (isCollision) {
    randomX = Math.random() * (sectionWidth - elementWidth);
    randomY = Math.random() * (sectionHeight - elementHeight);

    isCollision = false; // Supprimez la condition d'arrêt de la boucle

    for (const position of positions) {
      if (
        randomX + elementWidth > position.x &&
        randomX < position.x + elementWidth &&
        randomY + elementHeight > position.y &&
        randomY < position.y + elementHeight
      ) {
        isCollision = true;
        break;
      }
    }
  }

  competence.style.left = `${randomX}px`;
  competence.style.top = `${randomY}px`;
  positions.push({ x: randomX, y: randomY });
});

  