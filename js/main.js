// Main JavaScript

// Import necessary modules or scripts
import { initAnimations } from './animations.js';
import { initNavigation } from './navigation.js';
import { initPortfolio } from './portfolio.js';
import { initTestimonials } from './testimonials.js';
import { initContactForm } from './contact.js';

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize all components
  initAnimations();
  initNavigation();
  initPortfolio();
  initTestimonials();
  initContactForm();

  console.log('Portfolio website initialized successfully!');
});