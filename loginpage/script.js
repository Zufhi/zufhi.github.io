function darkTheme() {
  const html = document.documentElement;
  let darkthemeIcon = document.getElementById("darkthemeIcon");
  let lightthemeIcon = document.getElementById("lightthemeIcon");

  html.setAttribute("data-bs-theme", "dark");
  darkthemeIcon.classList.add("d-none");
  lightthemeIcon.classList.remove("d-none");
}

function lightTheme() {
  const html = document.documentElement;
  let darkthemeIcon = document.getElementById("darkthemeIcon");
  let lightthemeIcon = document.getElementById("lightthemeIcon");

  html.setAttribute("data-bs-theme", "light");
  lightthemeIcon.classList.add("d-none");
  darkthemeIcon.classList.remove("d-none");
}

function changeTheme() {
  let th = document.documentElement.getAttribute("data-bs-theme");

  if (th === "light") {
    darkTheme();
    localStorage.setItem("theme", "dark");
  } else if (th === "dark") {
    lightTheme();
    localStorage.setItem("theme", "light");
  }
}

function loadTheme() {
  let theme = localStorage.getItem("theme");

  if (theme == null) {
    localStorage.setItem("theme", "light");
  } else if (theme == "light") {
    lightTheme();
  } else if (theme == "dark") {
    darkTheme();
  }
}

function ugrasRegister() {
  let registerOldal = document.getElementById("registerOldal");
  let loginOldal = document.getElementById("loginOldal");

  if (!loginOldal.classList.contains("d-none")) {
    loginOldal.classList.add("d-none");
  }

  registerOldal.classList.remove("d-none");
}

function vissza() {
  location.reload();
}

function checkPassword() {
  let jelszo = document.getElementById("password").value;
  let progressbar = document.getElementById("progress1");
  let helyesJ = 0;

  let lowercaseF = document.getElementById("lowercaseF");
  let uppercaseF = document.getElementById("uppercaseF");
  let numberF = document.getElementById("numberF");
  let specialF = document.getElementById("specialF");
  let hosszF = document.getElementById("hosszF");
  let passwordLeiras = document.getElementById("passwordLeiras");

  passwordLeiras.classList.remove("d-none");
  lowercaseF.classList.remove("d-none");
  uppercaseF.classList.remove("d-none");
  numberF.classList.remove("d-none");
  specialF.classList.remove("d-none");
  hosszF.classList.remove("d-none");

  if (/[a-z]/.test(jelszo)) {
    helyesJ++;
    lowercaseF.classList.add("d-none");
  }

  if (/[A-Z]/.test(jelszo)) {
    helyesJ++;
    uppercaseF.classList.add("d-none");
  }

  if (/[0-9]/.test(jelszo)) {
    helyesJ++;
    numberF.classList.add("d-none");
  }

  if (/[._%+!~$]/.test(jelszo)) {
    helyesJ++;
    specialF.classList.add("d-none");
  }

  if (jelszo.length >= 8) {
    helyesJ++;
    hosszF.classList.add("d-none");
  }

  let szazalek = (helyesJ / 5) * 100;
  progressbar.style.width = szazalek + "%";

  progressbar.classList.remove("bg-danger", "bg-warning", "bg-success");

  if (szazalek === 100) {
    passwordLeiras.classList.add("d-none");
    progressbar.classList.add("bg-success");
  } else if (szazalek >= 50) {
    progressbar.classList.add("bg-warning");
  } else {
    progressbar.classList.add("bg-danger");
  }
}

function checkPassMatch() {
  let egyezes = document.getElementById("passwordMegerosites").value;
  let jelszo = document.getElementById("password").value;
  let passwordMegerositesLeiras = document.getElementById(
    "passwordMegerositesLeiras"
  );

  if (!passwordMegerositesLeiras.classList.contains("d-none")) {
    passwordMegerositesLeiras.classList.add("d-none");
  }

  if (egyezes != jelszo) {
    passwordMegerositesLeiras.classList.remove("d-none");
  }
}

function checkUsername() {
  let username = document.getElementById("felhasznaloNev").value;
  let usernameCheck = document.getElementById("usernameError");

  if (!usernameCheck.classList.contains("d-none")) {
    usernameCheck.classList.add("d-none");
  }

  if (
    username.length > 30 ||
    username.length < 3 ||
    !/^[a-zA-Z0-9]+$/.test(username)
  ) {
    usernameCheck.classList.remove("d-none");
  }
}

function checkEmail() {
  let emailcim = document.getElementById("emailCim").value;
  let emailcheck = document.getElementById("emailError");

  if (!emailcheck.classList.contains("d-none")) {
    emailcheck.classList.add("d-none");
  }

  if (!emailcim.match(/^[a-zA-Z0-9._]+@[a-zA-Z0-9.]+\.[a-zA-Z]{2,3}$/)) {
    emailcheck.classList.remove("d-none");
  }
}

function register() {
  let emailcim = document.getElementById("emailCim").value;
  let valid = true;

  let foglaltEmail = document.getElementById("emailFoglalt");
  let foglaltUsername = document.getElementById("usernameFoglalt");

  let notValidRegister = document.getElementById("notValidRegister");

  if (!notValidRegister.classList.contains("d-none")) {
    notValidRegister.classList.add("d-none");
  }

  if (!foglaltEmail.classList.contains("d-none")) {
    foglaltEmail.classList.add("d-none");
  }

  if (!foglaltUsername.classList.contains("d-none")) {
    foglaltUsername.classList.add("d-none");
  }

  if (!emailcim.match(/^[a-zA-Z0-9._]+@[a-zA-Z0-9.]+\.[a-zA-Z]{2,3}$/)) {
    valid = false;
  }

  let username = document.getElementById("felhasznaloNev").value;
  console.log(username);

  if (
    username.length > 30 ||
    username.length < 3 ||
    !/^[a-zA-Z0-9]+$/.test(username)
  ) {
    valid = false;
  }

  let egyezes = document.getElementById("passwordMegerosites").value;
  let jelszo = document.getElementById("password").value;

  if (egyezes != jelszo) {
    valid = false;
  }

  let helyesJ = 0;

  if (/[a-z]/.test(egyezes)) {
    helyesJ++;
  }

  if (/[A-Z]/.test(egyezes)) {
    helyesJ++;
  }

  if (/[0-9]/.test(egyezes)) {
    helyesJ++;
  }

  if (/[._%+!~$]/.test(egyezes)) {
    helyesJ++;
  }

  if (egyezes.length >= 8) {
    helyesJ++;
  }

  if (helyesJ != 5) {
    valid = false;
  }

  if (valid) {
    if (localStorageRegisterCheck(username, emailcim, jelszo) === "BEmail") {
      foglaltEmail.classList.remove("d-none");
    } else if (
      localStorageRegisterCheck(username, emailcim, jelszo) === "BFhsz"
    ) {
      foglaltUsername.classList.remove("d-none");
    } else {
      alert("Sikeres regisztráció!");
      location.reload();
    }
  }

  if (emailcim === "" || jelszo === "" || egyezes === "" || username === "") {
    notValidRegister.classList.remove("d-none");
  }
}

function localStorageRegisterCheck(fhsznev, email, jelszo) {
  const userKey = email + ";" + fhsznev;
  const users = JSON.parse(localStorage.getItem("users") || "{}");

  for (const k in users) {
    let mentettEmail = k.split(";")[0];
    let mentettFhsz = k.split(";")[1];

    if (mentettEmail.toLowerCase() === email.toLowerCase()) {
      return "BEmail";
      break;
    }

    if (mentettFhsz.toLowerCase() === fhsznev.toLowerCase()) {
      return "BFhsz";
      break;
    }
  }

  users[userKey] = jelszo;
  localStorage.setItem("users", JSON.stringify(users));
}

function login() {
  const emailjelszoegyezes = document.getElementById("emailjelszoegyezes");
  const loginEmail = document.getElementById("loginEmail").value;
  const loginPassword = document.getElementById("loginPassword").value;

  if (!emailjelszoegyezes.classList.contains("d-none")) {
    emailjelszoegyezes.classList.add("d-none");
  }

  const users = JSON.parse(localStorage.getItem("users") || "{}");

  for (const k in users) {
    let mentettEmail = k.split(";")[0];
    let mentettFhsz = k.split(";")[1];
    let jelszo = users[k];

    if (
      (mentettEmail == loginEmail || mentettFhsz == loginEmail) &&
      jelszo == loginPassword
    ) {
      let cred = mentettEmail + ";" + mentettFhsz + ";" + jelszo;
      localStorage.setItem("loggedInUser", cred);
      location.reload();
      break;
    } else {
      emailjelszoegyezes.classList.remove("d-none");
    }
  }
}

function logout() {
  localStorage.removeItem("loggedInUser");
  location.reload();
}

function loggedInUserCheck() {
  const LIU = localStorage.getItem("loggedInUser");
  const loginOldal = document.getElementById("loginOldal");
  const loggedInOldal = document.getElementById("loggedInOldal");

  let loggedInEmail = document.getElementById("loggedInEmail");
  let loggedInUsername = document.getElementById("loggedInUsername");
  let loggedInPassword = document.getElementById("loggedInPassword");

  if (LIU != null) {
    loggedInOldal.classList.remove("d-none");
    loginOldal.classList.add("d-none");

    let cred = LIU.split(";");

    loggedInEmail.value = cred[0];
    loggedInUsername.value = cred[1];
    loggedInPassword.value = cred[2];
  }
}
