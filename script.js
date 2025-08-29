
document.getElementById("theme-toggle").addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
  this.textContent = document.body.classList.contains("dark-mode") ? "☀ Light Mode" : "🌙 Dark Mode";
});


document.getElementById("cta-btn").addEventListener("click", function() {
  alert("🚀 Let's start swapping skills!");
});


const burger = document.getElementById("burger");
const navLinks = document.getElementById("nav-links");
burger.addEventListener("click", () => navLinks.classList.toggle("active"));


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

    
    const newCard = document.createElement("div");
    newCard.className = "skill-card";
    newCard.innerHTML = `<h3>${name}</h3><p>${desc}</p>`;

    skillsContainer.appendChild(newCard);

    
    document.getElementById("skill-name").value = "";
    document.getElementById("skill-desc").value = "";
    skillFormContainer.style.display = "none";
  } else {
    alert("Please fill in both fields!");
  }
});