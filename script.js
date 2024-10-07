//active menu

const navbarMenu = document.querySelector(".navbar-menu");
const menu = document.querySelector("#menu");

document.querySelector("#menu").onclick = () => {
  navbarMenu.classList.toggle("active");
};

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarMenu.contains(e.target)) {
    navbarMenu.classList.remove("active");
  }
});

function validateForm(event) {
  event.preventDefault();

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var email = document.getElementById("email").value;
  var nationality = document.getElementById("nationality").value;
  var checkbox = document.getElementById("agree").checked;
  var error_msg = document.getElementById("error_msg");

  if (username == "") {
    error_msg.innerText = "Username must be filled";
  } else if (!email.endsWith("@gmail.com")) {
    error_msg.innerText = "Your must use gmail.com";
  } else if (!checkPassword(password)) {
    error_msg.innerText =
      "Password must be 8 character and contain number and alphabet";
  } else if (nationality == "empty") {
    error_msg.innerText = "Nationality must be selected";
  } else if (!checkbox) {
    error_msg.innerText = "You must agree to our terms and conditions";
  } else {
    error_msg.innerText = "";
    window.location.href = "index.html";
  }
}

function checkPassword(password) {
  if (password.length < 8) return false;

  var isNum = false;
  var isAlpha = false;

  for (var i = 0; i < password.length; i++) {
    if (isNaN(password[i])) {
      isAlpha = true;
    } else {
      isNum = true;
    }
  }
  if (isNum && isAlpha) return true;
  return false;
}


  