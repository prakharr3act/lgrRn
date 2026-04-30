lgrBtn = document.getElementById("lgrBtn");
lgrContainer = document.getElementById("lgrContainer");
userName = document.getElementById("usrNm");
password = document.getElementById("pssWrd");
email = document.getElementById("eml");
confirmLgr = document.getElementById("confirmBtn");
alertText = document.getElementById("alertText");
helpFill = document.getElementById("helpFill");

lgrBtn.addEventListener("click", function() {
    lgrContainer.style.visibility = "visible";
});

confirmLgr.addEventListener("click", function() {
  if (userName.value == "" || password.value == "" || email.value == "") {
    alertText.innerHTML = "Please check the fields.";
    helpFill.style.visibility = "visible";
    helpFill.innerHTML = `<a href="#"> Don't know how to fill </a>`
  }
  if (userName.value != "" && password.value != "" && email.value != "") {
    alertText.innerHTML = "Login successful!";
    helpFill.style.visibility = "hidden";
    userName.value = "";
    password.value = "";
    email.value = "";
    confirmLgr.innerHTML = `<a href="userAccount.html">Proceed</a>`;
  }
});