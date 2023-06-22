const email = document.querySelector('#email');
const userName = document.querySelector('#userName');
const password = document.querySelector('#password');
const confPassword = document.querySelector('#confPassword');
const signUp = document.querySelector('#signUp');

signUp.addEventListener('submit', e => {
    event.preventDefault();
    if (password.value === confPassword.value) {
        //password and confpassword is equal => add the user Info to the local storage
        localStorage.setItem('email', email.value);
        localStorage.setItem('userName', userName.value);
        localStorage.setItem('password', password.value.toString());
        alert('Sign Up Successfuly🔐');
        window.location.href = '../index.html';


    } else {
        alert("Sory the Password doesn't match Try Again!")
    }
});