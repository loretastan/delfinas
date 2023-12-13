function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateRandomNumbers() {
    const number1 = Math.floor(Math.random() * 6) +1;
    const number2 = Math.floor(Math.random() * 6) +1;
}

const h2_1 = document.getElementById('result1');
const h2_2 = document.getElementById('result2');

h2_1.innerText = number1;
h2_2.innerText = number2;

if (number1 === number2) {
    h2_1.classList.add('red-text');
    h2_2.classList.add('red-text');
} else {
    h2_1.classList.remove('red-text');
    h2_2.classList.remove('red-text')
}