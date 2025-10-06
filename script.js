const menuToggle = document.querySelector('.menu-toggle');
const navUl = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  navUl.classList.toggle('show');
});
document.querySelectorAll('nav ul li a').forEach(link => 
  {
  link.addEventListener('click', function(e) 
                        {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
    // Close mobile menu after click
    navUl.classList.remove('show');
  });
});
//Contact Form Submission
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Form submitted successfully! We will contact you soon.');
  contactForm.reset();
});

