// Counter Animation
function animateCounters() {
  const counters = document.querySelectorAll('.stat-number[data-target]');
  
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'));
    const increment = target / 100;
    let current = 0;
    
    const updateCounter = () => {
      if (current < target) {
        current += increment;
        counter.textContent = Math.floor(current) + (target > 100 ? '+' : '%');
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target + (target > 100 ? '+' : '%');
      }
    };
    
    updateCounter();
  });
}

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
      if (entry.target.classList.contains('about-stats')) {
        animateCounters();
      }
    }
  });
}, observerOptions);

// Observe sections
document.querySelectorAll('section').forEach(section => {
  section.style.animationDelay = '0.1s';
  observer.observe(section);
});

// Mobile menu (same as contact page)
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    document.querySelector('.menu-toggle i').classList.toggle('fa-bars');
    document.querySelector('.menu-toggle i').classList.toggle('fa-times');
  });
});
