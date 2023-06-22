const userName = document.querySelector('#userName');
const password = document.querySelector('#password');
const login = document.querySelector('#login');

login.addEventListener('submit', e => {
    event.preventDefault();
    // get username and password to the local stroage
    const dbUserName = localStorage.getItem('userName');
    const dbPassword = Number(localStorage.getItem('password'));
    // check if the inserted userName and password simmilar to the localstorage
    if (dbUserName === userName.value && dbPassword == password.value) {
        window.location.href = '../html/ethiopian_art.html';
    } else {
        alert("Wrong Username or Password 🚨");
    }
});