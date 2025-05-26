// Testimonials slider functionality

/**
 * Initialize testimonials slider
 */
export function initTestimonials() {
  const testimonialSlider = document.querySelector('.testimonials-slider');
  const testimonialCards = document.querySelectorAll('.testimonial-card');
  const prevButton = document.querySelector('.testimonial-nav-prev');
  const nextButton = document.querySelector('.testimonial-nav-next');
  
  if (!testimonialSlider || testimonialCards.length === 0) return;
  
  let currentIndex = 0;
  const cardWidth = testimonialCards[0].offsetWidth;
  const visibleCards = Math.floor(testimonialSlider.offsetWidth / cardWidth);
  
  // Initialize card positioning
  updateCardPositions();
  
  // Previous button click handler
  if (prevButton) {
    prevButton.addEventListener('click', () => {
      currentIndex = Math.max(0, currentIndex - 1);
      updateCardPositions();
    });
  }
  
  // Next button click handler
  if (nextButton) {
    nextButton.addEventListener('click', () => {
      currentIndex = Math.min(testimonialCards.length - visibleCards, currentIndex + 1);
      updateCardPositions();
    });
  }
  
  // Update on window resize
  window.addEventListener('resize', () => {
    const newVisibleCards = Math.floor(testimonialSlider.offsetWidth / testimonialCards[0].offsetWidth);
    
    if (newVisibleCards !== visibleCards) {
      // Reset position when visible cards count changes
      currentIndex = 0;
      updateCardPositions();
    }
  });
  
  // Update card positions based on current index
  function updateCardPositions() {
    const scrollAmount = -currentIndex * (cardWidth + 16); // 16px is the gap
    testimonialSlider.style.transform = `translateX(${scrollAmount}px)`;
    testimonialSlider.style.transition = 'transform 0.4s ease';
    
    // Update button states
    if (prevButton) {
      prevButton.disabled = currentIndex === 0;
      prevButton.style.opacity = currentIndex === 0 ? '0.5' : '1';
    }
    
    if (nextButton) {
      const maxIndex = testimonialCards.length - visibleCards;
      nextButton.disabled = currentIndex >= maxIndex;
      nextButton.style.opacity = currentIndex >= maxIndex ? '0.5' : '1';
    }
  }
  
  // Touch event handling for mobile swipe
  let startX, moveX, initialPosition;
  
  testimonialSlider.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    initialPosition = -currentIndex * (cardWidth + 16);
    testimonialSlider.style.transition = 'none';
  }, { passive: true });
  
  testimonialSlider.addEventListener('touchmove', (e) => {
    moveX = e.touches[0].clientX;
    const diff = moveX - startX;
    testimonialSlider.style.transform = `translateX(${initialPosition + diff}px)`;
  }, { passive: true });
  
  testimonialSlider.addEventListener('touchend', (e) => {
    testimonialSlider.style.transition = 'transform 0.4s ease';
    
    if (moveX && startX) {
      const diff = moveX - startX;
      
      if (diff > 50 && currentIndex > 0) {
        // Swipe right, go to previous
        currentIndex--;
      } else if (diff < -50 && currentIndex < testimonialCards.length - visibleCards) {
        // Swipe left, go to next
        currentIndex++;
      }
      
      updateCardPositions();
    }
  }, { passive: true });
}