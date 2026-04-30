lgrBtn = document.getElementById("lgrBtn");
lgrContainer = document.getElementById("lgrContainer");
userName = document.getElementById("usrNm");
password = document.getElementById("pssWrd");
email = document.getElementById("eml");
confirmLgr = document.getElementById("cnfrmBtn");

lgrBtn.addEventListener("click", function() {
    lgrContainer.style.visibility = "visible";
});

confirmLgr.addEventListener("click", function() {
  if (userName.value == "") {
    userName.style.borderColor = "red";
    userName.placeholder = "Please enter your username";
  }
  else if (password.value == "") {
    password.style.borderColor = "red";
    password.placeholder = "Please enter your password";
  }
  else if (email.value == "") {
    email.style.borderColor = "red";
    email.placeholder = "Please enter your email";
  }
});