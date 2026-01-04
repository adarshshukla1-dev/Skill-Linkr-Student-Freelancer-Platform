// Pricing Page Functionality
if (document.querySelector('.pricing-switcher')) {
  // Pricing switcher toggle
  const switcherOptions = document.querySelectorAll('.switcher-option');
  const pricingCards = document.querySelectorAll('.pricing-card');
  
  switcherOptions.forEach(option => {
    option.addEventListener('click', () => {
      // Update active switcher
      switcherOptions.forEach(opt => opt.classList.remove('active'));
      option.classList.add('active');
      
      // Toggle pricing
      const plan = option.dataset.plan;
      pricingCards.forEach(card => {
        card.classList.toggle('yearly-active', plan === 'yearly');
        card.classList.toggle('monthly-pricing', plan === 'monthly');
        
        const amountEl = card.querySelector('.amount');
        const monthlyPrice = amountEl.dataset.monthly;
        const yearlyPrice = amountEl.dataset.yearly;
        
        amountEl.textContent = plan === 'yearly' ? yearlyPrice : monthlyPrice;
      });
    });
  });
  
  // Animate price counters
  const priceStats = document.querySelectorAll('.hero-pricing .stat h3');
  const animatePriceStats = () => {
    priceStats.forEach(stat => {
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
      }, 30);
    });
  };
  
  const priceObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animatePriceStats();
        priceObserver.unobserve(entry.target);
      }
    });
  });
  
  priceObserver.observe(document.querySelector('.hero-stats'));
}
