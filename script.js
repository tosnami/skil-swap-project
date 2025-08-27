// Dark Mode Toggle
document.getElementById("theme-toggle").addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
  this.textContent = document.body.classList.contains("dark-mode") ? "☀ Light Mode" : "🌙 Dark Mode";
});

// CTA Button
document.getElementById("cta-btn").addEventListener("click", function() {
  alert("🚀 Let's start swapping skills!");
});

// Burger Menu
const burger = document.getElementById("burger");
const navLinks = document.getElementById("nav-links");
burger.addEventListener("click", () => navLinks.classList.toggle("active"));

// Add Skill Form
const addSkillBtn = document.getElementById("add-skill-btn");
const skillFormContainer = document.getElementById("skill-form-container");

addSkillBtn.addEventListener("click", () => {
  skillFormContainer.style.display = skillFormContainer.style.display === "none" ? "block" : "none";
});

const submitSkillBtn = document.getElementById("submit-skill");
submitSkillBtn.addEventListener("click", () => {
  const name = document.getElementById("skill-name").value.trim();
  const desc = document.getElementById("skill-desc").value.trim();

  if (name && desc) {
    const skillsContainer = document.querySelector(".skills-container");

    // Create new skill card
    const newCard = document.createElement("div");
    newCard.className = "skill-card";
    newCard.innerHTML = `<h3>${name}</h3><p>${desc}</p>`;

    skillsContainer.appendChild(newCard);

    // Reset form
    document.getElementById("skill-name").value = "";
    document.getElementById("skill-desc").value = "";
    skillFormContainer.style.display = "none";
  } else {
    alert("Please fill in both fields!");
  }
});