// Contact form functionality

/**
 * Initialize contact form 
 */
export function initContactForm() {
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Get form field values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;
      
      // Validate form fields
      if (!name || !email || !subject || !message) {
        showFormMessage('Please fill in all fields', 'error');
        return;
      }
      
      if (!isValidEmail(email)) {
        showFormMessage('Please enter a valid email address', 'error');
        return;
      }
      
      // Simulate form submission
      // In a real-world scenario, you would send this data to a server
      console.log('Form submitted:', { name, email, subject, message });
      
      // Show success message
      showFormMessage('Message sent successfully! I will get back to you soon.', 'success');
      
      // Reset form
      contactForm.reset();
    });
  }
  
  /**
   * Validates an email address format
   * @param {string} email - The email to validate
   * @returns {boolean} - Whether the email is valid
   */
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  /**
   * Display a form submission message
   * @param {string} message - The message to display
   * @param {string} type - The message type (success or error)
   */
  function showFormMessage(message, type) {
    // Remove any existing message
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
      existingMessage.remove();
    }
    
    // Create message element
    const messageElement = document.createElement('div');
    messageElement.className = `form-message ${type}`;
    messageElement.textContent = message;
    
    // Style based on message type
    if (type === 'success') {
      messageElement.style.backgroundColor = 'rgba(76, 175, 80, 0.1)';
      messageElement.style.color = '#4caf50';
      messageElement.style.border = '1px solid #4caf50';
    } else {
      messageElement.style.backgroundColor = 'rgba(244, 67, 54, 0.1)';
      messageElement.style.color = '#f44336';
      messageElement.style.border = '1px solid #f44336';
    }
    
    // Additional styling
    messageElement.style.padding = '12px';
    messageElement.style.borderRadius = '4px';
    messageElement.style.marginBottom = '16px';
    
    // Insert message before the form
    contactForm.parentNode.insertBefore(messageElement, contactForm);
    
    // Remove message after 5 seconds
    setTimeout(() => {
      messageElement.style.opacity = '0';
      messageElement.style.transition = 'opacity 0.5s ease';
      
      setTimeout(() => {
        messageElement.remove();
      }, 500);
    }, 5000);
  }
}