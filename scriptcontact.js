document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const messageBox = document.getElementById("form-message");
  const btn = form.querySelector("button");
  const btnText = btn.querySelector(".btn-text");
  const btnLoading = btn.querySelector(".btn-loading");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get values
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();

    // Basic validation
    if (!name || !email || !subject || !message) {
      showMessage("Please fill all fields ❌", "error");
      return;
    }

    if (!validateEmail(email)) {
      showMessage("Enter a valid email address ❌", "error");
      return;
    }

    // Button loading state
    btn.disabled = true;
    btnText.style.display = "none";
    btnLoading.style.display = "inline-flex";

    // Simulated API request (replace with EmailJS/Firebase later)
    setTimeout(() => {
      showMessage("Message sent successfully ✅", "success");
      form.reset();

      btn.disabled = false;
      btnText.style.display = "inline";
      btnLoading.style.display = "none";
    }, 1500);
  });

  function showMessage(text, type) {
    messageBox.textContent = text;
    messageBox.className = `form-message ${type}`;
    messageBox.style.opacity = "1";

    setTimeout(() => {
      messageBox.style.opacity = "0";
    }, 4000);
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
});

