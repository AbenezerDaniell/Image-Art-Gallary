// Singup

// add the dom value 
const email = document.querySelector('#email');
const userName = document.querySelector('#userName');
const password = document.querySelector('#password');
const confPassword = document.querySelector('#confPassword');
const signUp = document.querySelector('#signUp');
const login = document.querySelector('#login');

signUp.addEventListener('submit', e => {
    event.preventDefault();
    if (password.value === confPassword.value) {
        localStorage.setItem('email', email);
        localStorage.setItem('userName', userName);
        localStorage.setItem('password', password.toString());
        alert('Sign Up Successfuly🔐');
        window.location.href = '../index.html';


    } else {
        alert("Sory the Password doesn't match Try Again!")
    }
});

// Login
login.addEventListener('submit', e => {
    event.preventDefault();
    const dbUserName = localStorage.getItem('userName');
    const dbPassword = Number(localStorage.getItem('password'));
    if (dbUserName === userName.value && dbPassword === password.value) {
        window.location.href = '../html/ethiopian_art.html';
    } else {
        alert("Wrong Username or Password 🚨");
    }
});
//add event listener for the login
//check if the password and userName match to the password and the username in the local stroage
//if match load the all.html page
//if not display error message


