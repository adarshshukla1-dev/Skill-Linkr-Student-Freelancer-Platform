document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  // Demo credentials
  if (username === "admin" && password === "1234") {
    alert("Login Successful!");
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid username or password");
  }
});
