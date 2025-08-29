document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if(email === "" || password === "") {
    alert("Please fill in all fields.");
    return;
  }

  
  window.location.href = "index.html";
});