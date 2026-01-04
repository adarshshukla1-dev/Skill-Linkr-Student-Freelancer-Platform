// For Clients page - same animation pattern as students
if (document.querySelector('.hero-clients')) {
  const stats = document.querySelectorAll('.hero-clients .stat h3');
  
  const animateStats = () => {
    stats.forEach(stat => {
      const targetText = stat.textContent;
      const target = parseInt(targetText.replace(/[^\d]/g, ''));
      let count = 0;
      const increment = target / 100;
      const timer = setInterval(() => {
        count += increment;
        if (count >= target) {
          stat.textContent = targetText;
          clearInterval(timer);
        } else {
          const newText = targetText.replace(/[\d,]+/, Math.floor(count));
          stat.textContent = newText;
        }
      }, 20);
    });
  };

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
