const words = ["Programadora", "Desenvolvedora Front-End", "Designer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 150; 
const erasingSpeed = 100; 
const delayBetweenWords = 1000; // Pausa entre as palavras

const dynamicTextElement = document.getElementById("dynamic-text");

function type() {
  const currentWord = words[wordIndex];
  let displayedText;

  if (isDeleting) {
    // Se está apagando
    displayedText = currentWord.substring(0, charIndex - 1);
    charIndex--;
  } else {
    // Se está digitando
    displayedText = currentWord.substring(0, charIndex + 1);
    charIndex++;
  }

  dynamicTextElement.textContent = displayedText;

  // Se a palavra foi completamente digitada
  if (!isDeleting && charIndex === currentWord.length) {
    isDeleting = true;
    setTimeout(type, delayBetweenWords); // Pausa após a digitação
  }
  // Se a palavra foi completamente apagada
  else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length; // Muda para a próxima palavra
    setTimeout(type, typingSpeed);
  } else {
    const speed = isDeleting ? erasingSpeed : typingSpeed;
    setTimeout(type, speed); // Continua digitando ou apagando
  }
}

// Iniciar a animação de digitação
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(type, delayBetweenWords);
});

// Icone do Menu funcionar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x')
  navbar.classList.toggle('active');
}