/* =========================
   Mobile Menu Toggle
========================= */
const menuToggle = document.querySelector('.menu-toggle');
const navUl = document.querySelector('nav ul');

if (menuToggle && navUl) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navUl.classList.toggle('show');
    menuToggle.setAttribute('aria-expanded', isOpen);
  });
}

/* =========================
   Smooth Scroll + Menu Close
========================= */
document.addEventListener('click', (e) => {
  const link = e.target.closest('nav ul li a');
  if (!link) return;

  const targetId = link.getAttribute('href');
  if (!targetId || !targetId.startsWith('#')) return;

  const targetSection = document.querySelector(targetId);
  if (!targetSection) return;

  e.preventDefault();
  targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

  // Close mobile menu
  navUl?.classList.remove('show');
  menuToggle?.setAttribute('aria-expanded', false);
});

/* =========================
   Contact Form Submission
========================= */
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Simple UX feedback
    alert('Form submitted successfully! We will contact you soon.');

    contactForm.reset();
  });
}

/* =========================
   Scroll Reveal Animation
========================= */
const sections = document.querySelectorAll('section');

const observerOptions = {
  threshold: 0.15,
  rootMargin: '0px 0px -50px 0px'
};

const revealOnScroll = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
};

const sectionObserver = new IntersectionObserver(revealOnScroll, observerOptions);

sections.forEach(section => {
  section.classList.add('hidden');
  sectionObserver.observe(section);
});

/* =========================
   Page Load Animation
========================= */
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});

