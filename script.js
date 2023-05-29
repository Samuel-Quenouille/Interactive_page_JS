//Fonctionnalité 1 : Afficher le mot "clique" en console.
let footer = document.querySelector('footer');
footer.addEventListener('click', function() {
    console.log('clique');
});

//Fonctionnalité 1-bis : Afficher en console "clic numéro x" avec x qui commence à 1 et s'incrémente de +1 à chaque clic
let footerBis = document.querySelector('footer');
let clickCount = 0;
footerBis.addEventListener('click', function() {
    clickCount++;
    console.log('clic numéro' + clickCount);
});

//Fonctionnalité 2 : Faire fonctionner ce satané "Hamburger Menu"
let navbar = document.querySelector('#navbarHeader')
let button = document.querySelector("body > header > div.navbar.navbar-dark.bg-dark.box-shadow > div > button")
button.addEventListener('click', function() {
    navbar.classList.toggle("collapse")
});

//Fonctionnalité 3 : Si on clique sur le bouton "Edit" de la première card, le texte de la card va se mettre en rouge de façon irréversible (sauf si on recharge la page).
let card = document.querySelector("body > main > div > div > div > div:nth-child(1) > div > div")
let edit = document.querySelector("body > main > div > div > div > div:nth-child(1) > div > div > div > div > button.btn.btn-sm.btn-outline-secondary")
card.addEventListener('click', function() {
    this.style.color = 'red';
});

//Fonctionnalité 4 : Si on clique sur le bouton "Edit" de la deuxième card, le texte de la card va se mettre en vert. Si on re-clique dessus, il redevient comme avant !
let secondCard = document.querySelector("body > main > div > div > div > div:nth-child(2) > div > div")
let secondEdit = document.querySelector("body > main > div > div > div > div:nth-child(2) > div > div > div > div > button.btn.btn-sm.btn-outline-secondary")
secondCard.addEventListener('click', function() {
    if (this.style.color === 'green'){
        this.style.color = '';
    } else {
        this.style.color = 'green'
    }
});

//Fonctionnalité 5 : Si un utilisateur double clique sur la navbar en haut, tout Bootstrap disparaît et la page s'affiche comme si on avait oublié de mettre le CDN qui la relie au fichier CSS. Si possible, rends cette fonctionnalité réversible (un nouveau double-clic fait tout revenir à la normale).
let navbarBis = document.querySelector("body > header > div.navbar.navbar-dark.bg-dark.box-shadow")
let bootstrap = document.querySelector("head > link")
navbarBis.addEventListener('dblclick', function() {
    bootstrap.disabled = !bootstrap.disabled;
});

//Fonctionnalité 6 :
let cardBis = document.querySelector("body > main > div > div > div > div:nth-child(1) > div")
let viewButton = document.querySelector("body > main > div > div > div > div:nth-child(1) > div > div > div > div > button.btn.btn-sm.btn-success")
viewButton.addEventListener('mouseenter', function() {
    cardBis.classList.toggle("card-text");
});
