const singupForm = document.querySelector("#signup-form");
const signinForm = document.querySelector("#signin-form");
// singup
singupForm.addEventListener("submit", () => {
  event.preventDefault();
  const email = singupForm.querySelector("#email").value;
  const name = singupForm.querySelector("#name").value;
  const password = singupForm.querySelector("#password").value;
  const confPassword = singupForm.querySelector("#confPassword").value;
  if (password !== confPassword) {
    alert("password do not much");
  } else {
    localStorage.setItem("name", name);
    localStorage.setItem("password", password);
    localStorage.setItem("email", email);
    alert("Singup Successfuly");
    window.location.href = "../html/login.html";
  }
});

