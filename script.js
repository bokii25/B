let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  // Hvatanje trenutne pozicije skrola
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Tolerancija od 5px da se izbegne treperenje na sitnim pomacima
  if (Math.abs(lastScrollTop - scrollTop) <= 5) return;

  // Ako skrolujemo na dole i prošli smo visinu navbara (75px) -> sakrij ga
  if (scrollTop > lastScrollTop && scrollTop > 75) {
    navbar.classList.add('nav-hidden');
  } else {
    // Ako skrolujemo na gore -> prikaži ga
    navbar.classList.remove('nav-hidden');
  }
  
  // Čuvanje pozicije za sledeći frejm (sa iOS zaštitom)
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});