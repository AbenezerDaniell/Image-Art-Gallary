
const navToggler = document.querySelector(".nav__toggler");
console.log(navToggler);
const navList = document.querySelector(".nav__list");
const checkBox = document.querySelector("#checkbox");
const togglerIcon = document.querySelector(".toggler__icon");

// collapsible navbar for mobile design
navToggler.addEventListener("click", (e) => {
  navList.classList.toggle("nav__expand");
});

//Darkmode: listen checkox change

checkBox.addEventListener("change", (e) => {
  document.body.classList.toggle("dark-mode");
  console.log(document.body.classList);
});

// Image full screen mode


