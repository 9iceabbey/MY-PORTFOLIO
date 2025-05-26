// Portfolio functionality

/**
 * Initialize portfolio filtering
 */
export function initPortfolio() {
  const portfolioFilters = document.querySelectorAll('.portfolio-filter');
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  
  if (portfolioFilters.length > 0 && portfolioItems.length > 0) {
    // Filter portfolio items when a filter is clicked
    portfolioFilters.forEach(filter => {
      filter.addEventListener('click', () => {
        // Remove active class from all filters
        portfolioFilters.forEach(f => f.classList.remove('active'));
        
        // Add active class to clicked filter
        filter.classList.add('active');
        
        const filterValue = filter.getAttribute('data-filter');
        
        // Show/hide portfolio items based on filter
        portfolioItems.forEach(item => {
          if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
            item.style.display = 'block';
            
            // Add animation with a slight delay
            setTimeout(() => {
              item.style.opacity = '1';
              item.style.transform = 'translateY(0)';
            }, 50);
          } else {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            
            // Hide element after animation completes
            setTimeout(() => {
              item.style.display = 'none';
            }, 300);
          }
        });
      });
    });
    
    // Initialize with 'all' filter active
    portfolioFilters[0].click();
  }
  
  // Add hover effect for portfolio items
  portfolioItems.forEach(item => {
    const overlay = item.querySelector('.portfolio-overlay');
    
    if (overlay) {
      item.addEventListener('mouseenter', () => {
        overlay.style.opacity = '1';
      });
      
      item.addEventListener('mouseleave', () => {
        overlay.style.opacity = '0';
      });
    }
  });
}