logoutBtn = document.getElementById("logoutBtn");
logoutConfirmBtn = document.getElementById("confirmLogoutBtn");
logoutContainer = document.getElementsByClassName("logoutContainer")[0];

logoutBtn.addEventListener("click", function() {
  logoutContainer.style.visibility = "visible";
});

logoutConfirmBtn.addEventListener("click", function() {
  logoutContainer.style.visibility = "hidden";
  alert("You have been logged out.");
  window.location.href = "lgrRn.html";
});