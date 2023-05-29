//Fonctionnalité 1 :
let footer = document.querySelector('footer');
footer.addEventListener('click', function() {
    console.log('clique');
});

//Fonctionnalité 1-bis :
let footerBis = document.querySelector('footer');
let clickCount = 0;
footerBis.addEventListener('click', function() {
    clickCount++;
    console.log('clic numéro' + clickCount);
});

//Fonctionnalité 2 :
let navbar = document.querySelector('#navbarHeader')
let button = document.querySelector("body > header > div.navbar.navbar-dark.bg-dark.box-shadow > div > button")
button.addEventListener('click', function() {
    navbar.classList.toggle("collapse")
});

//Fonctionnalité 3 :
let card = document.querySelector("body > main > div > div > div > div:nth-child(1) > div > div")
let edit = document.querySelector("body > main > div > div > div > div:nth-child(1) > div > div > div > div > button.btn.btn-sm.btn-outline-secondary")
card.addEventListener('click', function() {
    this.style.color = 'red';
});

//Fonctionnalité 4 :
let secondCard = document.querySelector("body > main > div > div > div > div:nth-child(2) > div > div")
let secondEdit = document.querySelector("body > main > div > div > div > div:nth-child(2) > div > div > div > div > button.btn.btn-sm.btn-outline-secondary")
secondCard.addEventListener('click', function() {
    if (this.style.color === 'green'){
        this.style.color = '';
    } else {
        this.style.color = 'green'
    }
});

//Fonctionnalité 5 :
let navbarBis = document.querySelector("body > header > div.navbar.navbar-dark.bg-dark.box-shadow")
let bootstrap = document.querySelector("head > link")
navbarBis.addEventListener('dblclick', function() {
    bootstrap.disabled = !bootstrap.disabled;
});