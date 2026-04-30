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
    confirmLgr.innerHTML = `<a href="userAccount.html" style="color: white; text-decoration: none;">Proceed</a>`;
  }
  if (password.value == "") {
    password.style.borderColor = "red";
    password.placeholder = "please fill the password";
  }
  if (userName.value == "") {
    userName.style.borderColor = "red";
    userName.placeholder = "please fill the username";
  }

  if (email.value == "") {
    email.style.borderColor = "red";
    email.placeholder = "please fill the email";
  }


    if (password.value !== "") {
    password.style.borderColor = "green";
  }
  if (userName.value !== "") {
    userName.style.borderColor = "green";
  }

  if (email.value !== "") {
    email.style.borderColor = "green";
  }
  
});