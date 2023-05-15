// Sign
const signinForm = document.querySelector("#login-form");
signinForm.addEventListener("submit", () => {
  event.preventDefault();
  const name = signinForm.querySelector("#name").value;
  const password = signinForm.querySelector("#password").value;
  const dbName = localStorage.getItem("name");
  const dbPassword = localStorage.getItem("password");
  if (name === dbName && password === dbPassword) {
    window.location.href = "../html/ethiopian_art.html";
  } else {
    if (name === dbName) {
      alert("Wrong Password!!!");
    } else {
      alert("You don't have an account, please signup first");
    }
  }
});
