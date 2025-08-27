// زرار CTA
document.getElementById("cta-btn").addEventListener("click", function() {
  alert("🚀 Welcome to Skill Swap! Let's get started.");
});

// زرار Dark Mode
document.getElementById("theme-toggle").addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
  
  if (document.body.classList.contains("dark-mode")) {
    this.textContent = "☀ Light Mode";
  } else {
    this.textContent = "🌙 Dark Mode";
  }
});

// زرار Burger Menu
const burger = document.getElementById("burger");
const navLinks = document.getElementById("nav-links");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});