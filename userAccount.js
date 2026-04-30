logoutBtn = document.getElementById("logoutBtn");
logoutConfirmBtn = document.getElementById("confirmLogoutBtn");
logoutContainer =document.getElementsByClassName("logoutContainer")

logoutBtn.addEventListener("click", function() {
  logoutContainer.style.visibility = "visible";

});