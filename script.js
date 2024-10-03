let currentIndex = 0;

function moveCarousel(direction) {
  const cards = document.querySelectorAll('.carousel-card');
  const totalCards = cards.length;

  currentIndex = (currentIndex + direction + totalCards) % totalCards;

  const carouselWrapper = document.querySelector('.carousel-wrapper');
  const cardWidth = cards[0].clientWidth;
  carouselWrapper.style.transform = `translateX(${-cardWidth * currentIndex}px)`; 
}
