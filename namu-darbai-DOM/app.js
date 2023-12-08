const h1 = document.querySelector('h1');
h1.style.color = 'green';

const i = document.querySelector('i');
i.classList.add('small');

h1.classList.remove('main');

const h2pirmas = document.querySelector('h2');
h2pirmas.classList.add('first');
h2pirmas.classList.remove('main');

const spanpirmas = document.querySelector('h2 span');
spanpirmas.style.fontSize = '10px';
spanpirmas.style.color = 'grey';

const h2visi = document.querySelectorAll('h2');
const h2befirst = document.querySelectorAll('h2:not(.first)');
console.log(h2visi.length);
console.log(h2befirst.length);

h2visi.forEach(spalva => {
    spalva.style.color = 'skyblue';
    // spalva.classList.remove('first');
});

const divPrices = document.querySelectorAll('div.prices h2');
divPrices.forEach(tagas => {
    tagas.classList.add('price-tag');
});

const sunew = document.querySelectorAll('.new');
sunew.forEach(pabraukti => {
    pabraukti.style.textDecoration = 'underLine';
});

const gyvunuKategorijos = document.querySelectorAll('div.animals ul');
console.log(gyvunuKategorijos.length);

const zirafuSkaicius = document.querySelectorAll('#zirafos li:not(.like-button)');
console.log(zirafuSkaicius.length);

const but1 = document.querySelector('#h1-color');
but1.addEventListener('click', _ => {
    h1.style.color = 'green';
});

const but2 = document.querySelector('#h1-font');
but2.addEventListener('click', _ => {
    h1.style.fontSize = '10px';
});

const but3 = document.querySelector('#h1-color-back');
but3.addEventListener('click', _ => {
    h1.style.color = 'black';
});

const but4 = document.querySelector('#h1-font-back');
but4.addEventListener('click', _ => {
    h1.style.fontSize = '32px';
});

i.addEventListener('click', _ => {
    i.style.fontWeight = 'bold';
});

const pricesklases = document.querySelector('.prices');
let skaiciuoklis = 0;
pricesklases.addEventListener('click', _ => {
    skaiciuoklis++;
    if (skaiciuoklis % 2 === 0 && skaiciuoklis !== 0 ) {
        pricesklases.style.backgroundColor = 'white';
    } else pricesklases.style.backgroundColor = 'grey';
    //pricesklases.classList.toggle('bg-grey');
});

const contacts = document.querySelector('#contacts');
contacts.addEventListener('click', _ => {
    contacts.style.color = 'orange';
});

const padidinti = document.querySelector('#contacts u');
padidinti.addEventListener('click', e => {
    e.stopPropagation();
    contacts.style.fontSize = '20px';
});
const xas = document.querySelector('#contacts b');
xas.addEventListener('click', e => {
    e.stopPropagation();
    contacts.style.fontSize = '16px';
    contacts.style.color = 'black';
});



