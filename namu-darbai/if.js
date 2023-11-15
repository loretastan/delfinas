console.log('Namu darbai 1.salyga');

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
}

let digit1 = rand(0, 4);
let digit2 = rand(0, 4);

console.log(digit1, digit2);