// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Close menu when clicking on a link
navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});

// Logout functionality
document.getElementById('logout').addEventListener('click', function(e) {
  e.preventDefault();
  if (confirm('Are you sure you want to log out?')) {
    localStorage.removeItem('userLoggedIn');
    alert('Logged out successfully!');
    // Redirect to login page if needed
    window.location.href = 'login.html';
  }
});

// Form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(this);
  alert('Thank you! Your message has been sent. We\'ll get back to you soon.');
  this.reset();
});

// Animate cards on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
    }
  });
}, observerOptions);

document.querySelectorAll('.card').forEach(card => {
  observer.observe(card);
});

// Check login status on page load
window.addEventListener('load', () => {
  if (!localStorage.getItem('userLoggedIn')) {
    // Optionally redirect to login or show login prompt
    console.log('User not logged in');
  }
});
