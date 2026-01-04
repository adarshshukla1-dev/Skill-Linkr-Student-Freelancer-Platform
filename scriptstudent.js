// For Students page specific functionality
if (document.querySelector('.hero-student')) {
  // Animate stats counter
  const stats = document.querySelectorAll('.stat h3');
  const animateStats = () => {
    stats.forEach(stat => {
      const target = parseInt(stat.textContent.replace(/[^\d]/g, ''));
      let count = 0;
      const increment = target / 100;
      const timer = setInterval(() => {
        count += increment;
        if (count >= target) {
          stat.textContent = stat.textContent.replace(/[\d,]+/, target.toLocaleString());
          clearInterval(timer);
        } else {
          stat.textContent = stat.textContent.replace(/[\d,]+/, Math.floor(count).toLocaleString());
        }
      }, 20);
    });
  };

  // Trigger animation when stats visible
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateStats();
        statsObserver.unobserve(entry.target);
      }
    });
  });

  statsObserver.observe(document.querySelector('.hero-stats'));
}
