// Animation functionality

/**
 * Initialize scroll animations
 */
export function initAnimations() {
  // Get all elements with the animate-on-scroll class
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  
  // Add visible class to elements in the viewport on load
  checkElementsInViewport();
  
  // Listen for scroll events
  window.addEventListener('scroll', () => {
    checkElementsInViewport();
  });
  
  /**
   * Checks which elements are in the viewport and adds visible class
   */
  function checkElementsInViewport() {
    animatedElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const elementBottom = element.getBoundingClientRect().bottom;
      const isVisible = (elementTop < window.innerHeight - 100) && (elementBottom > 0);
      
      if (isVisible) {
        element.classList.add('visible');
      }
    });
  }
  
  // Header scroll effect
  const header = document.getElementById('header');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}