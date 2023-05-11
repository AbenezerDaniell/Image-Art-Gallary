// implement collapsible navbar for mobile design
const navToggler = document.querySelector('.nav__toggler');
console.log(navToggler)
const navList = document.querySelector('.nav__list');
const checkBox = document.querySelector('#checkbox');
const togglerIcon = document.querySelector('.toggler__icon')


navToggler.addEventListener('click', e => {
    navList.classList.toggle('nav__expand');
});

checkBox.addEventListener('change', e => {
    document.body.classList.toggle('dark-mode');
    console.log(document.body.classList);
})




