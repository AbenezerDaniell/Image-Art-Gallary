const userName = document.querySelector('#userName');
const password = document.querySelector('#password');
const login = document.querySelector('#login');

login.addEventListener('submit', e => {
    event.preventDefault();
    const dbUserName = localStorage.getItem('userName');
    const dbPassword = Number(localStorage.getItem('password'));
    console.log(dbUserName, dbPassword);
    console.log(userName.value, password.value);
    if (dbUserName === userName.value && dbPassword == password.value) {
        window.location.href = '../html/ethiopian_art.html';
    } else {
        alert("Wrong Username or Password 🚨");
    }
});