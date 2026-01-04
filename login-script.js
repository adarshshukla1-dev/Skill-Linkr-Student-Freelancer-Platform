// Enhanced Login Script
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('loginForm');
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const togglePassword = document.querySelector('.toggle-password');
  const loginBtn = document.querySelector('.login-btn');
  const inputs = document.querySelectorAll('.login-form input');

  // Demo credentials check
  const demoEmail = 'demo@skilllinkr.com';
  const demoPassword = 'demo123';

  // Input validation & visual feedback
  inputs.forEach(input => {
    input.addEventListener('blur', validateInput);
    input.addEventListener('input', validateInput);
  });

  function validateInput(e) {
    const wrapper = e.target.closest('.input-wrapper');
    const value = e.target.value.trim();
    
    if (value.length > 0) {
      wrapper.classList.add('valid');
    } else {
      wrapper.classList.remove('valid');
    }
  }

  // Password toggle
  togglePassword.addEventListener('click', function() {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    this.classList.toggle('fa-eye');
    this.classList.toggle('fa-eye-slash');
  });

  // Form submission
  form.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    
    if (!username || !password) {
      showNotification('Please fill all fields', 'error');
      return;
    }

    // Show loading state
    loginBtn.classList.add('loading');
    loginBtn.disabled = true;

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Demo login check
      if (username === demoEmail && password === demoPassword) {
        showNotification('Login successful! Redirecting...', 'success');
        setTimeout(() => {
          window.location.href = 'dashboard.html';
        }, 1500);
      } else {
        throw new Error('Invalid credentials');
      }
      
    } catch (error) {
      showNotification('Invalid username or password', 'error');
    } finally {
      loginBtn.classList.remove('loading');
      loginBtn.disabled = false;
    }
  });

  // Notification system
  function showNotification(message, type) {
    // Remove existing notification
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();
    
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
      <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
      ${message}
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.classList.add('show');
    }, 100);
    
    setTimeout(() => {
      notification.classList.remove('show');
      setTimeout(() => notification.remove(), 300);
    }, 4000);
  }

  // Auto-fill demo on demo card click
  const demoCard = document.querySelector('.demo-card');
  if (demoCard) {
    demoCard.addEventListener('click', function() {
      usernameInput.value = demoEmail;
      passwordInput.value = demoPassword;
      usernameInput.dispatchEvent(new Event('input'));
      passwordInput.dispatchEvent(new Event('input'));
      
      // Focus on form
      form.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Enter key submits form
  document.addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && document.activeElement === passwordInput) {
      form.dispatchEvent(new Event('submit'));
    }
  });

  // Pre-fill demo on load (for demo purposes)
  setTimeout(() => {
    if (!usernameInput.value) {
      usernameInput.value = demoEmail;
      passwordInput.value = demoPassword;
      inputs.forEach(input => input.dispatchEvent(new Event('input')));
    }
  }, 500);
});
