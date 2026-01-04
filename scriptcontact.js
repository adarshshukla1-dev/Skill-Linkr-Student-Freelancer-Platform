// contact-script.js
document.addEventListener('DOMContentLoaded', function() {
  // Mobile Menu Toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  
  menuToggle.addEventListener('click', function() {
    nav.classList.toggle('active');
    menuToggle.querySelector('i').classList.toggle('fa-bars');
    menuToggle.querySelector('i').classList.toggle('fa-times');
  });

  // Close menu when clicking on a link
  document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
      menuToggle.querySelector('i').classList.remove('fa-times');
      menuToggle.querySelector('i').classList.add('fa-bars');
    });
  });

  // Form Handling
  const contactForm = document.getElementById('contactForm');
  const formMessage = document.getElementById('form-message');
  const btn = contactForm.querySelector('.btn');
  const btnText = btn.querySelector('.btn-text');
  const btnLoading = btn.querySelector('.btn-loading');

  contactForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    // Show loading state
    btn.disabled = true;
    btnText.classList.add('inactive');
    btnLoading.classList.add('active');
    
    // Hide previous message
    formMessage.classList.remove('show', 'success', 'error');

    try {
      const formData = new FormData(contactForm);
      const data = Object.fromEntries(formData);
      
      // Simulate API call (replace with your backend endpoint)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulate success
      showMessage('Thank you! Your message has been sent successfully. We\'ll reply within 24 hours.', 'success');
      contactForm.reset();
      
    } catch (error) {
      showMessage('Oops! Something went wrong. Please try again.', 'error');
    } finally {
      // Reset button state
      btn.disabled = false;
      btnText.classList.remove('inactive');
      btnLoading.classList.remove('active');
    }
  });

  function showMessage(text, type) {
    formMessage.textContent = text;
    formMessage.className = `form-message ${type} show`;
    
    // Auto hide after 5 seconds
    setTimeout(() => {
      formMessage.classList.remove('show');
    }, 5000);
  }

  // Input animations
  document.querySelectorAll('.form-group input, .form-group textarea').forEach(input => {
    input.addEventListener('focus', function() {
      this.parentElement.classList.add('focused');
    });
    
    input.addEventListener('blur', function() {
      if (!this.value) {
        this.parentElement.classList.remove('focused');
      }
    });
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Header scroll effect
  window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
      header.style.background = 'rgba(255, 255, 255, 0.98)';
      header.style.boxShadow = '0 5px 30px rgba(0, 0, 0, 0.15)';
    } else {
      header.style.background = 'rgba(255, 255, 255, 0.95)';
      header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
  });
});
